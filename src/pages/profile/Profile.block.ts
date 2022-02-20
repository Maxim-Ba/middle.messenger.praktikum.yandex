import { Block } from "../../modules/Block";
import template from "./profile.hbs";

export class Profile extends Block {
  // modalWindow: HTMLElement;
  constructor(props) {
    super("div", props, true);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log(this.props, "profile.propsooooooooooooooooooooooo");
    // this.element.replaceWith(this.tmpBlock);
  }
  changeDisabledInput() {
    this.setProps({ disabledInputs: false });
  }
}
