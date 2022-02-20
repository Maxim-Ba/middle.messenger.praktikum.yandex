import { Block } from "../../../../modules/Block";
import template from "./controlPassword.hbs";

export class ControlPassword extends Block {
  constructor(props) {
    super("template", props);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {}
}
