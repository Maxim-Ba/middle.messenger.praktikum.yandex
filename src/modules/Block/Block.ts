import { EventBus } from "../../utils/EventBus";
import { v4 as makeUUID } from "uuid";
import * as Handlebars from "handlebars";
import { compile } from "./compileBlock";
import { isEqual } from "../../utils/isEqual";
interface Props {
  [prop: string]: any;
}

export class Block<T extends Props> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
    FLOW_CWU: "flow:component-will-unmount",
  };
  static get componentName() {
    return "Block";
  }

  private _element: HTMLElement;
  eventBus: EventBus;
  props: Props;
  public _id: string;
  children: Block<Record<string, any>>;
  tmpBlock: HTMLElement;
  name: string;
  constructor(propsAndChildren = {}) {
    this.eventBus = new EventBus();
    this._id = makeUUID();
    this.initChildren = propsAndChildren;
    this.initProps = propsAndChildren;

    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  set initChildren(
    propsAndChildren: Record<string, any> | Block<Record<string, any>>
  ) {
    const { children } = this._getChildren(propsAndChildren);
    this.children = children as Block<Record<string, any>>;
  }
  set initProps(propsAndChildren: Record<string, any>) {
    const { props } = this._getChildren(propsAndChildren);
    this.props = this._makePropsProxy({ ...props, _id: this._id });
  }

  private _getChildren(propsAndChildren: object) {
    const children: Record<string, any> = {};
    const props: Record<string, any> = {};
    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  private _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element?.firstElementChild?.removeEventListener(
        eventName,
        events[eventName]
      );
    });
  }
  private _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
  }

  init() {
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }
  private _componentWillUnmount() {
    this.componentWillUnmount();
  }
  protected componentWillUnmount(): void {
    return;
  }
  public dispatchComponentWillUnmount(): void {
    this.componentWillUnmount();
  }
  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount(): void {
    return;
  }

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (!response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    return isEqual(oldProps, newProps);
  }

  setProps = (nextProps: Record<string, any> | Block<Record<string, any>>) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    this.eventBus.emit(Block.EVENTS.FLOW_CWU);

    const templateString = this.render();

    const fragment = compile(
      templateString,
      {
        ...this.props,
      },
      this
    );

    const newElement = fragment.firstElementChild as HTMLElement;
    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }
    this._element = newElement;
    this._removeEvents();

    this._addEvents();

    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  protected render(): string {
    return "<div>Stab</div>";
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props: typeof this.props) {
    const self: Block<Record<string, any>> = this;
    const proxyProps = new Proxy(props, {
      deleteProperty() {
        throw new Error("Нет доступа");
      },
      set(target, prop: string, value) {
        const oldProps = { ...target };

        target[prop] = value;

        self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      get(target: Record<string, any>, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
    });

    return proxyProps;
  }

  createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute("data-id", this._id);
    return element;
  }

  compile(templateString: string, context: any) {
    const fragment = this.createDocumentElement(
      "template"
    ) as HTMLTemplateElement;

    const template = Handlebars.compile(templateString);
    const htmlString = template({ ...context, children: this.children });
    fragment.innerHTML = htmlString;

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

      stub?.replaceWith(child.getContent());
    });

    return fragment.content;
  }
}
