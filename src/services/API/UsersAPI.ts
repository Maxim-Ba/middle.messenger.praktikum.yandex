import { UserData } from "./AuthAPI";
import BaseAPI from "./BaseAPI";

export type ChangedUserData = Omit<UserData, "avatar">;

export type PasswordData = {
  oldPassword: "string";
  newPassword: "string";
};

export class UsersAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  changeUserData(data: ChangedUserData): Promise<any> {
    return this.http.put("/profile", { data }).catch((e) => {
      console.log(e, "catch");
    });
  }

  changeUserAvatar(data: FormData): Promise<any> {
    return this.http
      .put("/profile/avatar", {
        data,
      })
      .catch((e) => {
        console.log(e, "catch");
      });
  }

  changeUserPassword(data: PasswordData): Promise<any> {
    return this.http.put("/password", { data }).catch((e) => {
      console.log(e, "catch");
    });
  }

  getUserById(id: number): Promise<any> {
    return this.http.get(`${id}`).catch((e) => {
      console.log(e, "catch");
    });
  }

  searchUserByLogin(data: { login: string }) {
    return this.http.post("/search", { data }).catch((e) => {
      console.log(e, "catch");
    });
  }
}
