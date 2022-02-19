import { Block } from "../../modules/Block";
import template from "./messages.hbs";

export class Messages extends Block {
  constructor(props) {
    super("template", props, true);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log("componentDidMount", "Chats");
  }
}
