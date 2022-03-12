import { killDOM } from "../../utils/killDOM";
import { render } from "../../utils/renderDOM";
import { Block } from "../Block/Block";

function isEqual<T>(lhs: T, rhs: T) {
  return lhs === rhs;
}

// -----------------------------------

export default class Route {
  private _pathname: string;

  private _block: Block<any>;
  private _props: Record<string, any>;
  private _currentBlock: null | Block<any>;
  constructor(pathname: string, block: Block<any>, props: Record<string, any>) {
    this._pathname = pathname;
    this._block = block;
    this._props = props;
    this._currentBlock = null;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._currentBlock) {
      killDOM(this._props.rootQuery, this._currentBlock);
      this._currentBlock = null; // вопрос
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._currentBlock) {
      this._currentBlock = this._block;
      render(this._props.rootQuery, this._currentBlock);
      return;
    }
    render(this._props.rootQuery, this._currentBlock);
  }
}
