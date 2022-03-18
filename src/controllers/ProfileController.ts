import store from "../modules/Store/Store";
import {
  ChangedUserData,
  PasswordData,
  UsersAPI,
} from "../services/API/UsersAPI";

class ProfileController {
  private api: UsersAPI;

  constructor() {
    this.api = new UsersAPI();
  }

  async changeUserData(data: ChangedUserData) {
    try {
      store.set("reason", null);
      const userDataResponse = await this.api.changeUserData(data);
      if (userDataResponse.response.reason) {
        console.log(userDataResponse.response.reason);
        store.set("reason", userDataResponse.response.reason);
        return;
      }
      store.set("currentUser", userDataResponse.response);
      this.isChangeProfileData();
      this.makePasswordFormHidden();
    } catch (e) {
      console.log(e);
    }
  }
  async changeUserAvatar(data: FormData) {
    try {
      store.set("reason", null);
      console.log(Object.fromEntries(data.entries()), "data");

      const userAvataraResponse = await this.api.changeUserAvatar(data);
      if (userAvataraResponse.response.reason) {
        console.log(userAvataraResponse.response.reason);
        store.set("reason", userAvataraResponse.response.reason);
        return;
      }
      store.set("currentUser", userAvataraResponse.response);
    } catch (e) {
      console.log(e);
    }
  }
  async changeUserPassword(data: PasswordData) {
    try {
      store.set("reason", null);
      const userPasswordResponse = await this.api.changeUserPassword(data);
      if (userPasswordResponse.response.reason) {
        console.log(userPasswordResponse.response.reason);
        store.set("reason", userPasswordResponse.response.reason);
        return;
      }
      this.isChangeProfileData();
      this.makePasswordFormHidden();
      alert("Пароль успешно изменён");
      return;
    } catch (e) {
      console.log(e);
    }
  }
  openWindow() {
    store.set("profileState.isOpenWindow" as any, true);
    store.set("modalWindow", {
      create: false,
      delete: false,
      change: false,
      addUser: false,
      deleteUser: false,
      location: false,
      file: false,
      fotoOrVideo: false,
      changeAva: true,
    });
  }
  closeWindow() {
    store.set("profileState.isOpenWindow" as any, false);
    store.set("modalWindow", {
      create: false,
      delete: false,
      change: false,
      addUser: false,
      deleteUser: false,
      location: false,
      file: false,
      fotoOrVideo: false,
      changeAva: false,
    });
  }
  isChangeProfileData() {
    store.set(
      "profileState.disabledInputs" as any,
      !store.getState().profileState.disabledInputs
    );
  }
  makePasswordFormVisible() {
    store.set("profileState.isPasswordFormVisible" as any, true);
  }
  makePasswordFormHidden() {
    store.set("profileState.isPasswordFormVisible" as any, false);
  }
}
export default new ProfileController();