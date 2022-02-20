import { Block } from "../../modules/Block";
import template from "./login.hbs";

export class Login extends Block {
  constructor(props) {
    super("div", props, true);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {}
}
