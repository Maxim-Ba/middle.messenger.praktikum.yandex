import { Block } from "../../../../modules/Block";
import template from "./controlPassword.hbs";

export class ControlPassword extends Block {
  constructor(props) {
    super("div", props);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    this.element.replaceWith(this.tmpBlock);
  }
}
