import { ChatsAPI, CreateChatData, GetChatData, GetUsersChatData, UploadChatAvatarData } from "../services/API/ChatsAPI";

class ChatsController {
    private api: ChatsAPI;
  
    constructor() {
      this.api = new ChatsAPI();
    }
  
    async getChats(data: GetChatData) {
      try {
        const getResponse = await this.api.getChats(data);
        if (getResponse.status !== 200) {
          console.log(getResponse.response.reason);
  
          throw new Error("status not 200" + getResponse.response.reason);
        }
        console.log(getResponse);
  
      } catch (e) {
        console.log(e);
      }
    }
    async createChat(data: CreateChatData) {
        try {
          const createResponse = await this.api.createChat(data);
          if (createResponse.status !== 200) {
            console.log(createResponse.response.reason);
    
            throw new Error("status not 200" + createResponse.response.reason);
          }
          console.log(createResponse);
    
        } catch (e) {
          console.log(e);
        }
      }
    async deleteChats(chatId: number) {
        try {
            const deleteResponse = await this.api.deleteChats({chatId});
            if (deleteResponse.status !== 200) {
            console.log(deleteResponse.response.reason);

            throw new Error("status not 200" + deleteResponse.response.reason);
            }
            console.log(deleteResponse);

        } catch (e) {
            console.log(e);
        }
    }
    async getUsersChat({id,params}:GetUsersChatData ) {
        try {
            const usersResponse = await this.api.getUsersChat({id,params});
            if (usersResponse.status !== 200) {
            console.log(usersResponse.response.reason);

            throw new Error("status not 200" + usersResponse.response.reason);
            }
            console.log(usersResponse);

        } catch (e) {
            console.log(e);
        }
    }
    async getNewMessagesCount(chatId:number ) {
        try {
            const newMessagesResponse = await this.api.getNewMessagesCount(chatId);
            if (newMessagesResponse.status !== 200) {
            console.log(newMessagesResponse.response.reason);

            throw new Error("status not 200" + newMessagesResponse.response.reason);
            }

        } catch (e) {
            console.log(e);
        }
    }
    async uploadAvatar(data:UploadChatAvatarData ) {
        try {
            const avatarResponse = await this.api.uploadAvatar(data);
            if (avatarResponse.status !== 200) {
            console.log(avatarResponse.response.reason);

            throw new Error("status not 200" + avatarResponse.response.reason);
            }

        } catch (e) {
            console.log(e);
        }
    }
    async addUsers(chatId:number, user:number ) {
        try {
            const addUsersResponse = await this.api.addUsers({chatId,users:[user]});
            if (addUsersResponse.status !== 200) {
            console.log(addUsersResponse.response.reason);
            throw new Error("status not 200" + addUsersResponse.response.reason);
            }

        } catch (e) {
            console.log(e);
        }
    }
    async deleteUsers(chatId:number, user:number ) {
        try {
            const deleteUsersResponse = await this.api.deleteUsers({chatId,users:[user]});
            if (deleteUsersResponse.status !== 200) {
            console.log(deleteUsersResponse.response.reason);
            throw new Error("status not 200" + deleteUsersResponse.response.reason);
            }

        } catch (e) {
            console.log(e);
        }
    }
    async getToken(id: number ) {
        try {
            const tokenResponse = await this.api.getToken(id);
            if (tokenResponse.status !== 200) {
            console.log(tokenResponse.response.reason);
            throw new Error("status not 200" + tokenResponse.response.reason);
            }

        } catch (e) {
            console.log(e);
        }
    }
}
  export default new ChatsController();