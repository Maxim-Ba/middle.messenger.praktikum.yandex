import router from "../modules/Router/Router";
import AuthAPI, { LoginData, SignupData } from "../services/API/AuthAPI";
import store from "../modules/Store/Store";
import { ChatsAPI } from "../services/API/ChatsAPI";
import chatsController from "./ChatsController";
import profileController from "./ProfileController";

class AuthController {
  chatsApi: ChatsAPI;
  api: typeof AuthAPI;

  constructor() {
    this.api = AuthAPI;
    this.chatsApi = new ChatsAPI();
  }

  async signup(data: SignupData) {
    try {
      const registerationResponse = await this.api.signup(data);
      if (registerationResponse.response.reason) {
        store.set("reason", registerationResponse.response.reason);
        return;
      }
      await this.fetchUser();
    } catch (e) {
      console.log(e);
    }
  }

  async login(data: LoginData) {
    try {
      const loginResponse = await this.api.login(data);
      if (loginResponse.response?.reason) {
        store.set("reason", loginResponse.response.reason);
        return;
      }
      await this.fetchUser();
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      await this.api.logout();
      store.set("currentUser", null);

      router.go("/");
    } catch (e) {
      console.log(e);
    }
  }

  async fetchUser() {
    try {
      store.set("reason", null);
      const user = await this.api.getUser();
      if (user.response.reason) {
        store.set("reason", user.response.reason);
        return;
      }

      store.set(
        "currentUser",
        profileController.adapterForUserData(user.response)
      );
      await chatsController.getChats({
        offset: 0,
        limit: 100,
        title: "",
      });

      this.redirect();

      return user.response;
    } catch (e) {
      console.log(e);
    }
  }

  redirect() {
    if (location.pathname === "/sign-up" && !store.getState().currentUser) {
      return;
    }
    if (!store.getState().currentUser) {
      router.go("/");
      return;
    }
    if (location.pathname === "/") {
      router.go("/messenger");
      return;
    }
    if (location.pathname === "/sign-up") {
      router.go("/messenger");
      return;
    }
  }
}

export default new AuthController();
