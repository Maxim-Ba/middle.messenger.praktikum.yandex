import { Block } from "../../../../modules/Block";
import template from "./controlsBtnsForm.hbs";

export class ControlBtnsForm extends Block {
  constructor(props) {
    super("template", props);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log("componentDidMount", "PasswordForm");
  }
}
