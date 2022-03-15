import { killDOM } from "../../utils/killDOM";
import { render } from "../../utils/renderDOM";
import { Block } from "../Block/Block";

function isEqual<T>(lhs: T, rhs: T) {
  return lhs === rhs;
}

// -----------------------------------

export default class Route {
  private _pathname: string;
  private _blockClass: typeof Block;
  private _block: Block<any>;
  private _props: Record<string, any>;
  constructor(
    pathname: string,
    view: typeof Block,
    props: Record<string, any>
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      killDOM(this._props.rootQuery, this._block);
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
    }

    const root = document.querySelector(this._props.rootQuery);

    if (!root) {
      throw new Error("Error! No root!");
    }

    root.innerHTML = "";
    render(this._props.rootQuery, this._block);
  }
}
