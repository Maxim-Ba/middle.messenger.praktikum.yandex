import { EventBus } from "../utils/EventBus";
import { v4 as makeUUID } from "uuid";
export type BlockType = typeof Block;

export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
  };

  private _element: HTMLTemplateElement;
  private _meta: null | { tagName: string; props: any } = null;
  eventBus: () => EventBus;
  props: any;
  private _id: any;
  children: {} | BlockType;
  isDeliverPropsChild: boolean;
  tmpBlock: HTMLElement;

  constructor(
    tagName: string = "div",
    propsAndChildren: object = {},
    isDeliverPropsChild: boolean = false,
  ) {
    const eventBus = new EventBus();
    this._id = makeUUID();
    const { children, props } = this._getChildren(propsAndChildren);
    this._meta = {
      tagName,
      props,
    };
    this.isDeliverPropsChild = isDeliverPropsChild;
    this.children = children;

    this.props = this._makePropsProxy({ ...props, _id: this._id });

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
      this._element.firstElementChild?.removeEventListener(
        eventName,
        events[eventName],
      );
    });
  }
  private _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.firstElementChild?.addEventListener(
        eventName,
        events[eventName],
      );
    });
  }

  private _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta as { tagName: string; props: object };
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this.isDeliverPropsChild && this._deliverPropsToChildren(); //прокидываем пропсы в child
    this._createResources();
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

  private _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    console.log(response);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    const result: boolean[] = [];
    Object.keys(newProps).forEach((newPropKey) => {
      // console.log(oldProps[newPropKey], "oldProps[newPropKey]");
      // console.log(newProps[newPropKey], "newProps[newPropKey]");

      result.push(oldProps[newPropKey] === newProps[newPropKey]);
    });
    return result.some((item) => item === false);
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    console.log(this.props, "_______");
    // this._componentDidUpdate(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  };

  private _deliverPropsToChildren() {
    //прокидываем пропсы в child
    Object.entries(this.children).forEach(([key, child]) => {
      child.props.parentsProps = { ...this.props };
    });
  }
  get element() {
    return this._element;
  }

  private _render() {
    this.tmpBlock = this.render();
    console.log(this.tmpBlock, "1111111");
    console.log(this, "22222222");
    console.log(this._element, " this._element");

    this._removeEvents();
    this._element.innerHTML = "";
    console.log(this._element, " this._element");
    this._element.replaceWith(this.tmpBlock);

    // this._element.appendChild(this.tmpBlock);
    this._addEvents();

    // console.log(this, "this._element");
    // console.log(this._element.content, "this._element.content");

    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  render() {
    const fragment = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "Заглушка";
    fragment.append(p);
    return fragment;
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props) {
    const self = this;
    const proxyProps = new Proxy(props, {
      deleteProperty(target, prop) {
        throw new Error("нет доступа");
      },
      set(target, prop, val) {
        target[prop] = val;
        self.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        return true;
      },
      get(target, prop) {
        return target[prop];
      },
    });

    return proxyProps;
  }

  private _createDocumentElement(tagName) {
    const element = document.createElement(tagName);
    element.setAttribute("data-id", this._id);
    return element;
  }

  compile(template: HandlebarsTemplateDelegate<any>, props) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const div = this._createDocumentElement("div");
    div.innerHTML = template(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = div.querySelector(`[data-id="${child._id}"]`);
      console.log(child.getContent());

      stub?.replaceWith(child.getContent());
    });

    return div.firstElementChild;
  }

  show() {
    this._element.style.display = "block";
  }

  hide() {
    this._element.style.display = "none";
  }
}
