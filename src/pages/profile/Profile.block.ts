import { Block } from "../../modules/Block";
import template from "./profile.hbs";

export class Profile extends Block {
  modalWindow: HTMLElement;
  constructor(props) {
    super("template", props);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log("componentDidMount", "Profile");
    this.modalWindow = document.querySelector("#modal-window")
    console.log(this.modalWindow, "this.modalWindow");

  }
}
