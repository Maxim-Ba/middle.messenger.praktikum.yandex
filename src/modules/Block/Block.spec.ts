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
    return "<div class=\"component\">{{{ChildrenComponent}}}</div>";
  }
}
class ChildrenComponent extends Block<any> {
  static get componentName() {
    return "ChildrenComponent";
  }
  render() {
    return "<p>ChildrenComponent</p>";
  }
}
registerComponent(Component);
registerComponent(ChildrenComponent);

describe("Проверяем отрисовку children", () => {
  const component = new Component(new ChildrenComponent());
  it("Проверяем правильную разметку из метода render", () => {
    expect(component.element.outerHTML).to.eq(
      "<div class=\"component\"><p>ChildrenComponent</p></div>"
    );
  });
});

describe("Проверяем работу props", () => {
  const component = new Component({ prop: "test" });
  it("Проверяем что props приходит", () => {
    expect(component.props.prop).to.eq("test");
  });
});
