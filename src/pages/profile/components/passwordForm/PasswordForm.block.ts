import { Block } from "../../../../modules/Block";
import template from "./passwordForm.hbs";

export class PasswordForm extends Block {
  constructor(props) {
    super("div", props);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {}
}
