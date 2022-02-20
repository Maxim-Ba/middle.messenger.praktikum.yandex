import { Block } from "../../modules/Block";
import template from "./chats.hbs";

export class Chats extends Block {
  constructor(props) {
    super("div", props, true);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log("componentDidMount", "Chats");
  }
}
