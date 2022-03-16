import { Router } from "../modules/Router/Router";
import { AuthAPI, LoginData, SignupData } from "../services/API/AuthAPI";
import store from "../modules/Store/Store";
import { ChatsAPI } from "../services/API/ChatsAPI";
import chatsController from "./ChatsController";
class AuthController {
  private api: AuthAPI;
  chatsApi: ChatsAPI;

  constructor() {
    this.api = new AuthAPI();
    this.chatsApi = new ChatsAPI();
  }

  async signup(data: SignupData) {
    try {
      const registerationResponse = await this.api.signup(data);
      if (registerationResponse.response.reason) {
        store.set(
          "reason",
          `Произошла ошибка ${registerationResponse.response.reason}`
        );
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
      console.log(loginResponse.response);

      if (loginResponse.response.reason) {
        console.log(loginResponse.response.reason);

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
      const router = new Router();
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
        return;
      }

      store.set("currentUser", user.response);
      await chatsController.getChats({
        offset: 0,
        limit: 100,
        title: "",
      });

      const router = new Router();
      router.go("/messenger");

      return user.response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AuthController();
