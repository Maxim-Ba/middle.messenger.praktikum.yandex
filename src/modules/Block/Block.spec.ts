import { Block } from "./Block";

import { expect } from "chai";
import { registerComponent } from "../../utils/registerComponent";
import { document } from "./JsDOM.test";
console.log(document);

class Component extends Block<any> {
  static get componentName() {
    return "Component";
  }
  render() {
    return `
      <card class="component 
        {{{ChildrenComponent}}}
      </card>
      `;
  }
}
class ChildrenComponent extends Block<any> {
  static get componentName() {
    return "ChildrenComponent";
  }
  render() {
    return `
      <p>ChildrenComponent</p>
      `;
  }
}

registerComponent(Component);
registerComponent(ChildrenComponent);

describe("Проверяем отрисовку children", () => {
  const component = new Component();
  it("Проверяем правильную разметку из метода render", () => {
    expect(component.render()).to.eq(`
      <card class="component <p>ChildrenComponent</p></card>
    `);
  });
});
