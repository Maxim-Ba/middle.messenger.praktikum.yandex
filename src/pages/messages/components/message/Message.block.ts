import { Block } from "../../../../modules/Block";
import template from "./message.hbs";

export class Message extends Block {
  constructor(props) {
    super("div", props, true);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log(this.props.parentsProps, "PPr");
  }
}
