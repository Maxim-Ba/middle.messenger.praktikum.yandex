import { expect } from "chai";
import { Router } from "./Router";
import { Block } from "../Block/Block";
import { dom } from "../../utils/JsDOM.test";
global.window = dom.window;
global.document = window.document;

class Component extends Block<any> {
  static get componentName() {
    return "Component";
  }
  render() {
    return `<card class="component"</card>`;
  }
}
describe("Проверяем переходы у Роута", () => {
  const router = new Router();
  router
    .use("/", Component)
    .use("/sign-up", Component)
    .use("/messenger", Component)
    .use("/settings", Component)
    .start();
  it("Переход на /", () => {
    router.go("/");
    expect(window.location.pathname).to.eq("/");
  });
  it("Переход на /sign-up", () => {
    router.go("/sign-up");
    expect(window.location.pathname).to.eq("/sign-up");
  });
  it("Переход на /messenger", () => {
    router.go("/messenger");

    expect(window.location.pathname).to.eq("/messenger");
  });
  it("Переход на /settings", () => {
    router.go("/settings");

    expect(window.location.pathname).to.eq("/settings");
  });
  it("Несколько переходов", () => {
    router.go("/settings");
    router.go("/messenger");
    router.back();
    expect(window.location.pathname).to.eq("/settings");
  });
});
