import { Block } from "../../../../modules/Block";
import template from "./menu-button.hbs";

export class MenuButtons extends Block {
  constructor(props) {
    super("div", props);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log(this.props.parentsProps?.buttons, "parentsProps");
    console.log(this.props.btns, "asdasdparentsProps");
  }
}
