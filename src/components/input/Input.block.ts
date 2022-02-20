import { Block } from "../../modules/Block";
import template from "./input.hbs";

export class Input extends Block {
  constructor(props) {
    super("div", props);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {}
}
