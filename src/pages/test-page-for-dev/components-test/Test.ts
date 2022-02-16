import { Block } from "../../../modules/Block";
import template from "../test.hbs";

export class Test extends Block {
  constructor(props) {
    // Создаём враппер DOM-элемент button
    super("template", props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
