import { expect } from "chai";
import { Router } from "./Router";
import LoginWithStore from "../../pages/login/login.index";
import RegistrationWithStore from "../../pages/registration/registration.index";
import ChatsWithStore from "../../pages/chats/chats.index";
import ProfileWithStore from "../../pages/profile/profile.index";
describe("Проверяем переходы у Роута", () => {
  const router = new Router();
  router
    .use("/", LoginWithStore)
    .use("/sign-up", RegistrationWithStore)
    .use("/messenger", ChatsWithStore)
    .use("/settings", ProfileWithStore)
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
