import { Block } from "../../modules/Block";
import template from "./modalWindow.hbs";

export class ModalWindowBlock extends Block {
  constructor(props) {
    super("template", props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
