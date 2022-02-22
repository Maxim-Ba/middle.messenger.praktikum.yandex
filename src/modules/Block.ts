import { EventBus } from "../utils/EventBus";
import { v4 as makeUUID } from "uuid";
import * as Handlebars from "handlebars";

export type BlockType = typeof Block;

export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
  };
  private _element: HTMLElement;
  private _meta: null | { props: any } = null;
  eventBus: () => EventBus;
  props: any;
  public _id: any;
  children: BlockType;
  tmpBlock: HTMLElement;

  constructor(propsAndChildren: object = {}) {
    const eventBus = new EventBus();
    this._id = makeUUID();
    const { children, props } = this._getChildren(propsAndChildren);
    this._meta = {
      props,
    };
    this.children = children as BlockType;
    this.props = this._makePropsProxy({ ...props, _id: this._id });
    this.initChildren();
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildren(propsAndChildren) {
    const children = {};
    const props = {};
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
        events[eventName],
      );
    });
  }
  private _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    console.log(oldProps, newProps, "_componentDidUpdate");

    const response = this.componentDidUpdate(oldProps, newProps);
    console.log(response, "response");

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    const result: boolean[] = [];
    return oldProps !== newProps;
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const templateString = this.render();
    const fragment = this.compile(templateString, {
      ...this.props,
    });
    const newElement = fragment.firstElementChild as HTMLElement;
    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }
    this._element = newElement;
    this._removeEvents();

    this._addEvents();

    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  protected render(): string {
    return "<div>Stab</div>";
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props) {
    const self = this;
    const proxyProps = new Proxy(props, {
      deleteProperty(target, prop) {
        throw new Error("Нет доступа");
      },
      set(target, prop, value) {
        target[prop] = value;
        const oldProps = { ...target };
        console.log(oldProps);

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      get(target: Record<string, any>, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
    });

    return proxyProps;
  }

  private _createDocumentElement(tagName) {
    const element = document.createElement(tagName);
    element.setAttribute("data-id", this._id);
    return element;
  }

  compile(templateString: string, context: any) {
    const fragment = this._createDocumentElement(
      "template",
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

  show() {
    this._element.style.display = "block";
  }

  hide() {
    this._element.style.display = "none";
  }
  protected initChildren() {}
}
