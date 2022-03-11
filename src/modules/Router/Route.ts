import { render } from "../../utils/renderDOM";
import { Block } from "../Block/Block";

function isEqual<T>(lhs: T, rhs: T) {
  return lhs === rhs;
}

// -----------------------------------

export default class Route {
  private _pathname: string;
  private _blockClass: Block<any>;
  private _block: null | Block<any>;
  private _props: Record<string, any>;
  constructor(pathname: string, view: Block<any>, props: Record<string, any>) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
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
      this._block.hide();
      //this._block = null // вопрос
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({ ...this._props });
      render(this._props.rootQuery, this._block as Block<any>);
      return;
    }
    this._block.show();
  }
}
