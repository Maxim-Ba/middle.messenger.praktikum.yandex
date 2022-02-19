import { Block } from "../../../../modules/Block";
import template from "./menu.hbs";

export class Menu extends Block {
  modal: Element | null;
  constructor(props) {
    super("template", props);
  }

  render() {
    return this.compile(template, this.props);
  }
  componentDidMount(): void {
    this.modal = this.getContent().content.querySelector("#modal-window");
    console.log(this.getContent().content, "<---this.modal");

    console.log(this.modal, "<---this.modal");
  }
}
