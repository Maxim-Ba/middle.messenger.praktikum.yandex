import { Block } from "../../../../modules/Block";
import template from "./chat-card.hbs";

export class ChatCard extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
