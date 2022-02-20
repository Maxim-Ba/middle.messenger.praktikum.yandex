import { Block } from "../../../../modules/Block";
import template from "./top-menu.hbs";

export class Menu extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
