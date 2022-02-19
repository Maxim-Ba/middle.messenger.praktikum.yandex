import { Block } from "../../modules/Block";
import template from "./input.hbs";

export class Input extends Block {
  constructor(props) {
    super("template", props);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log(this, "<-aaaaaaaaaaaaaaaa");
    console.log(this.props.parentsProps, "=parentsProps");
  }
}
