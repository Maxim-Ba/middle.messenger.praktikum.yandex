import { Block } from "../../modules/Block";
import template from "./login.hbs";

export class Login extends Block {
  login: HTMLElement | null;
  constructor(props) {
    super("template", props, true);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log("componentDidMount", "Registration");
    this.login = document.querySelector(".login");
    console.log(this.login, "<------------this.login");
    console.log(document.body.innerHTML, "<------------document");
  }
}
