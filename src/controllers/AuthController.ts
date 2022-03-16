import { Router } from "../modules/Router/Router";
import { AuthAPI, LoginData, SignupData } from "../services/API/AuthAPI";
import store from "../modules/Store/Store";
class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
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
      if (user.reponse.reason) {
        return;
      }
      store.set("currentUser", user.response);
      const router = new Router();
      router.go("/messages");
      return user.response;
    } catch (e) {}
  }
}

export default new AuthController();
