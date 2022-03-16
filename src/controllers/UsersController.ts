import { ChangedUserData, PasswordData, UsersAPI } from "../services/API/UsersAPI";

class UsersController {
    private api: UsersAPI;
  
    constructor() {
      this.api = new UsersAPI();
    }
  
    async changeUserData(data: ChangedUserData) {
      try {
        const changeUserResponse = await this.api.changeUserData(data);
        if (changeUserResponse.status !== 200) {
          console.log(changeUserResponse.response.reason);
          throw new Error("status not 200" + changeUserResponse.response.reason);
        } 
      } catch (e) {
        console.log(e);
      }
    }
    async changeUserAvatar(avatar:FormData) {
        try {
          const avatarResponse = await this.api.changeUserAvatar({avatar});
          if (avatarResponse.status !== 200) {
            console.log(avatarResponse.response.reason);
            throw new Error("status not 200" + avatarResponse.response.reason);
          } 
        } catch (e) {
          console.log(e);
        }
      }
    async changeUserPassword(data: PasswordData) {
        try {
            const passwordResponse = await this.api.changeUserPassword(data);
            if (passwordResponse.status !== 200) {
            console.log(passwordResponse.response.reason);
            throw new Error("status not 200" + passwordResponse.response.reason);
            } 
        } catch (e) {
            console.log(e);
        }
    }
    async getUserById(id:number) {
        try {
            const idResponse = await this.api.getUserById(id);
            if (idResponse.status !== 200) {
                console.log(idResponse.response.reason);
                throw new Error("status not 200" + idResponse.response.reason);
            } 
        } catch (e) {
            console.log(e);
        }
    }
    async searchUser(userName: string) {
        try {
            const searchResponse = await this.api.searchUser(userName);
            if (searchResponse.status !== 200) {
                console.log(searchResponse.response.reason);
                throw new Error("status not 200" + searchResponse.response.reason);
            } 
        } catch (e) {
            console.log(e);
        }
    }
}
  export default new UsersController();