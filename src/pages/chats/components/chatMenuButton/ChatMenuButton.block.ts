import { Block } from "../../../../modules/Block";
import template from "./chat-menu-button.hbs";
export class ChatsMenuButton extends Block {
  constructor(props) {
    super("template", props);
  }
  render() {
    return this.compile(template, this.props);
  }
  componentDidMount() {
    console.log(this.props, "props");
  }
  // сделать флаг с передачей пропсов в children & сам метод с передачей пропсов
}
