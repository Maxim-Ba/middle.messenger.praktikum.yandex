import router from "../modules/Router/Router";
import AuthAPI, { LoginData, SignupData } from "../services/API/AuthAPI";
import store from "../modules/Store/Store";
import { ChatsAPI } from "../services/API/ChatsAPI";
import chatsController from "./ChatsController";
import profileController from "./ProfileController";
import LoaderConteroller from "./LoaderController";

class AuthController {
  chatsApi: ChatsAPI;
  api: typeof AuthAPI;

  constructor() {
    this.api = AuthAPI;
    this.chatsApi = new ChatsAPI();
  }

  async signup(data: SignupData) {
    LoaderConteroller.start();
    try {
      const registerationResponse = await this.api.signup(data);
      if (registerationResponse.response.reason) {
        store.set("reason", registerationResponse.response.reason);
        return;
      }
      await this.fetchUser();
    } catch (e) {
      console.log(e);
    } finally {
      LoaderConteroller.end();
    }
  }

  async login(data: LoginData) {
    LoaderConteroller.start();
    try {
      const loginResponse = await this.api.login(data);
      if (loginResponse.response?.reason) {
        store.set("reason", loginResponse.response.reason);
        return;
      }
      await this.fetchUser();
    } catch (e) {
      console.log(e);
    } finally {
      LoaderConteroller.end();
    }
  }

  async logout() {
    try {
      LoaderConteroller.start();

      await this.api.logout();
      store.set("currentUser", null);

      router.go("/");
    } catch (e) {
      console.log(e);
    } finally {
      LoaderConteroller.end();
    }
  }

  async fetchUser() {
    try {
      LoaderConteroller.start();
      store.set("reason", null);

      if (store.getState().currentUser) {
        await chatsController.getChats({
          offset: 0,
          limit: 100,
          title: "",
        });
        this.redirect();
        return;
      }

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
    } finally {
      LoaderConteroller.end();
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
    if (location.pathname === "/" && store.getState().currentUser) {
      router.go("/messenger");
      return;
    }
    if (location.pathname === "/sign-up" && store.getState().currentUser) {
      router.go("/messenger");
      return;
    }
  }
  goToChats() {
    router.go("/messenger");
  }
}

export default new AuthController();
