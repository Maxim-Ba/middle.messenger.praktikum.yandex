import { Block } from "../../modules/Block";
import template from "./profile.hbs";

export class Profile extends Block {
  // modalWindow: HTMLElement;
  constructor(props) {
    super("template", props);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    // console.log("componentDidMount", "Profile");
    // console.log(this.modalWindow, "this.modalWindow");
  }
  changeDisabledInput() {
    this.setProps({ disabledInputs: false });
  }
  // componentDidUpdate(oldProps: any, newProps: any): boolean {
  //   const result: boolean[] = [];
  //   Object.keys(oldProps).forEach((oldPropKey) => {
  //     result.push(oldProps[oldPropKey] === newProps[oldPropKey]);
  //   });
  //   return result.some((item) => item === false);
  // }
}
