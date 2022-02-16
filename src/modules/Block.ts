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

  constructor(tagName: string = "template", propsAndChildren: object = {}) {
    const eventBus = new EventBus();
    const { children, props } = this._getChildren(propsAndChildren);
    this._meta = {
      tagName,
      props,
    };

    this.children = children;
    console.log(children);

    this._id = makeUUID();
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
    //NEW!!!
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  private _addEvents() {
    //NEW!!!
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
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
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(oldProps) {
    this.componentDidMount(oldProps);

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount(oldProps) {}

  dispatchComponentDidMount() {
    console.log("dispatchComponentDidMount");
  }

  private _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const block = this.render();

    this._removeEvents(); //NEW!!!
    this._element.innerHTML = "";
    this._element.content.appendChild(block);
    this._addEvents();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  // Может переопределять пользователь, необязательно трогать
  render() {
    const fragment = document.createElement("template");
    const p = document.createElement("p");
    p.textContent = "Заглушка";
    fragment.content.append(p);
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

    const fragment = this._createDocumentElement("template");
    const templateResult = template(propsAndStubs);

    fragment.innerHTML = templateResult;
    // до сюда работает правильно
    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      // console.log(stub, "<-stub1");
      // console.log(child.getContent(), "<-child.getContent()");

      const cloneChildNode = child.getContent().content;
      console.log(cloneChildNode, "<-cloneChildNode");

      stub.replaceWith(cloneChildNode);
    });
    // console.log(fragment.innerHTML, "<-fragment2.content");

    return fragment.content;
  }

  show() {
    this._element.style.display = "block";
  }

  hide() {
    this._element.style.display = "none";
  }
}
