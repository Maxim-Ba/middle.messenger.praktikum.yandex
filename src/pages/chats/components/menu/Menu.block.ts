import { Block } from "../../../../modules/Block";
import template from "./menu.hbs";

export class Menu extends Block {
  modal: Element | null;
  constructor(props) {
    super("div", props);
  }

  render() {
    return this.compile(template, this.props);
  }
  componentDidMount(): void {}
}
