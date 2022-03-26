import BaseAPI from "./BaseAPI";

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface LoginData {
  login: string;
  password: string;
}

export type UserData = Omit<SignupData, "password"> & {
  avatar: string;
  display_name: string;
};

class AuthAPI extends BaseAPI {
  constructor() {
    super("/auth");
  }

  signup(data: SignupData): Promise<any> {
    return this.http.post("/signup", { data }).catch((e) => {
      console.log(e, "catch");
    });
  }

  login(data: LoginData): Promise<any> {
    return this.http.post("/signin", { data });
  }

  logout(): Promise<unknown> {
    return this.http.post("/logout");
  }

  getUser(): Promise<any> {
    return this.http.get("/user");
  }
}

export default new AuthAPI();
