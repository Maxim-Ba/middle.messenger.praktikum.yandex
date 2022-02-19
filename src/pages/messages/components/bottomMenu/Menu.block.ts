import { Block } from "../../../../modules/Block";
import template from "./bottom-menu.hbs";

export class Menu extends Block {
  constructor(props) {
    super("template", props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
