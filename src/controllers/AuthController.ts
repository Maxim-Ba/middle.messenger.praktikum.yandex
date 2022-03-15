import {
  AuthAPI,
  LoginData,
  SignupData,
  UserData,
} from "../services/API/AuthAPI";

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signup(data: SignupData) {
    try {
      const registerationResponse = await this.api.signup(data);
      if (registerationResponse.status !== 200) {
        console.log(registerationResponse.response.reason);

        throw new Error("status not 200");
      }
      console.log(registerationResponse);

      const userResponse = await this.fetchUser();
    } catch (e) {
      console.log(e);
    }
  }

  async login(data: LoginData) {
    try {
      await this.api.login(data);
      await this.fetchUser();
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      await this.api.logout();
    } catch (e) {
      console.log(e);
    }
  }

  async fetchUser(): Promise<UserData | void> {
    try {
      const user = await this.api.getUser();

      return user;
    } catch (e) {}
  }
}

export default new AuthController();
