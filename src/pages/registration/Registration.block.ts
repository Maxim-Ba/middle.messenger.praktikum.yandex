import { Block } from "../../modules/Block";
import template from "./registration.hbs";

export class Registration extends Block {
  registration: HTMLElement | null;
  constructor(props) {
    super("div", props, true);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log("componentDidMount", "Registration");
    this.registration = document.querySelector(".registration");
    console.log(this.registration, "<------------this.registration");
  }
}
