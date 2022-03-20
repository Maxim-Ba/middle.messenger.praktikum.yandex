import { Block } from "./Block";

import { expect } from "chai";
import { registerComponent } from "../../utils/registerComponent";

import { dom } from "../../utils/JsDOM.test";
global.window = dom.window;
global.document = window.document;

class Component extends Block<any> {
  static get componentName() {
    return "Component";
  }
  render() {
    return `<card class="component">{{{ChildrenComponent}}}</card>`;
  }
}
class ChildrenComponent extends Block<any> {
  static get componentName() {
    return "ChildrenComponent";
  }
  render() {
    return `<p>ChildrenComponent</p>`;
  }
}
registerComponent(Component);
registerComponent(ChildrenComponent);

describe("Проверяем отрисовку children", () => {
  const component = new Component(new ChildrenComponent());
  console.log(component.element.innerHTML, "-----");

  it("Проверяем правильную разметку из метода render", () => {
    expect(component.element.innerHTML).to.eq(`
      <card class="component <p>ChildrenComponent</p></card>
    `);
  });
});

describe("Проверяем работу props", () => {
  const component = new Component({ prop: "test" });
  it("Проверяем что props приходит", () => {
    expect(component.props.prop).to.eq(`test`);
  });
});
