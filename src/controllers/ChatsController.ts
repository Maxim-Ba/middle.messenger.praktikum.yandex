import store from "../modules/Store/Store";
import { IChatsStore } from "../modules/Store/StoreTypes";
import {
  ChatsAPI,
  CreateChatData,
  GetChatData,
  GetUsersChatData,
  UploadChatAvatarData,
} from "../services/API/ChatsAPI";
import svgDefaultChatPic from "../../static/img/Chat-picture.svg";

class ChatsController {
  private api: ChatsAPI;

  constructor() {
    this.api = new ChatsAPI();
  }

  async getChats(data: GetChatData) {
    try {
      const getResponse = await this.api.getChats(data);
      if (getResponse.response.reason) {
        console.log(getResponse.response.reason);
        store.set("reason", getResponse.response.reason);
      }
      console.log(getResponse);
      store.set("chats", this._fillChats(getResponse.response));
    } catch (e) {
      console.log(e);
    }
  }
  private _fillChats(chats: IChatsStore[]) {
    const fillChats = chats.map((chat) => {
      let avatar = chat.avatar;
      let last_message = chat.last_message;
      const isSelected = false;
      if (!chat.avatar) {
        avatar = svgDefaultChatPic;
      }
      if (!chat.last_message) {
        last_message = {
          content: "",
          time: "",
        };
      }
      return { ...chat, avatar, isSelected, last_message };
    });
    console.log(fillChats);

    return fillChats;
  }
  async createChat(data: CreateChatData) {
    try {
      store.set("reason", null);
      const createResponse = await this.api.createChat(data);
      if (createResponse.response.reason) {
        console.log(createResponse.response.reason);
        store.set("reason", createResponse.response.reason);
      }
      this.closeWindow();
      const chats = this.getChats({ limit: 100, offset: 0, title: "" });
      store.set("chats", chats.response);

      console.log(createResponse);
    } catch (e) {
      console.log(e);
    }
  }
  async deleteChats(chatId: number) {
    try {
      store.set("reason", null);
      const deleteResponse = await this.api.deleteChats({ chatId });
      if (deleteResponse.status !== 200) {
        console.log(deleteResponse.response.reason);

        throw new Error("status not 200" + deleteResponse.response.reason);
      }
      console.log(deleteResponse);
    } catch (e) {
      console.log(e);
    }
  }
  async getUsersChat({ id, params }: GetUsersChatData) {
    try {
      const usersResponse = await this.api.getUsersChat({ id, params });
      if (usersResponse.status !== 200) {
        console.log(usersResponse.response.reason);

        throw new Error("status not 200" + usersResponse.response.reason);
      }
      console.log(usersResponse);
    } catch (e) {
      console.log(e);
    }
  }
  async getNewMessagesCount(chatId: number) {
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
  async uploadAvatar(data: UploadChatAvatarData) {
    try {
      store.set("reason", null);
      const avatarResponse = await this.api.uploadAvatar(data);
      if (avatarResponse.status !== 200) {
        console.log(avatarResponse.response.reason);
        throw new Error("status not 200" + avatarResponse.response.reason);
      }
    } catch (e) {
      console.log(e);
    }
  }
  async addUsers(chatId: number, user: number) {
    try {
      store.set("reason", null);
      const addUsersResponse = await this.api.addUsers({
        chatId,
        users: [user],
      });
      if (addUsersResponse.status !== 200) {
        console.log(addUsersResponse.response.reason);
        throw new Error("status not 200" + addUsersResponse.response.reason);
      }
    } catch (e) {
      console.log(e);
    }
  }
  async deleteUsers(chatId: number, user: number) {
    try {
      store.set("reason", null);
      const deleteUsersResponse = await this.api.deleteUsers({
        chatId,
        users: [user],
      });
      if (deleteUsersResponse.status !== 200) {
        console.log(deleteUsersResponse.response.reason);
        throw new Error("status not 200" + deleteUsersResponse.response.reason);
      }
    } catch (e) {
      console.log(e);
    }
  }
  async getToken(id: number) {
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
  openSearchField() {
    store.set(
      "chatsState.isResultSearchChat" as any,
      !store.getState().chatsState.isResultSearchChat
    );
    store.set(
      "chatsState.isOpenSearchField" as any,
      !store.getState().chatsState.isOpenSearchField
    );
  }

  openBottomMenu() {
    store.set(
      "chatsState.isOpenBottomMenu" as any,
      !store.getState().chatsState.isOpenBottomMenu
    );
  }
  searchChat(value: string) {
    const newChatsList = store.getState().chats.map((chat: IChatsStore) => {
      if (chat.title.match(new RegExp(`${value}`, "gi"))) {
        return chat;
      }
    });
    store.set("chatsState.isResultSearchChat" as any, true);
    store.set("chatsState.resultSearchChat" as any, newChatsList);
  }
  actionsBtn = () => ({
    create() {
      store.set(
        "chatsState.isOpenMenu" as any,
        !store.getState().chatsState.isOpenMenu
      );
      store.set("chatsState.isOpenWindow" as any, true);
      store.set("modalWindow", {
        create: true,
        delete: false,
        change: false,
        addUser: false,
        deleteUser: false,
        location: false,
        file: false,
        fotoOrVideo: false,
        changeAva: false,
      });
    },

    delete() {
      store.set(
        "chatsState.isOpenMenu" as any,
        !store.getState().chatsState.isOpenMenu
      );
      store.set("chatsState.isOpenWindow" as any, true);
      store.set("modalWindow", {
        create: false,
        delete: true,
        change: false,
        addUser: false,
        deleteUser: false,
        location: false,
        file: false,
        fotoOrVideo: false,
        changeAva: false,
      });
    },
    change() {
      store.set(
        "chatsState.isOpenMenu" as any,
        !store.getState().chatsState.isOpenMenu
      );
      store.set("chatsState.isOpenWindow" as any, true);
      store.set("modalWindow", {
        create: false,
        delete: false,
        change: true,
        addUser: false,
        deleteUser: false,
        location: false,
        file: false,
        fotoOrVideo: false,
        changeAva: false,
      });
    },
  });

  actionMessagesBtns = () => ({
    addUser() {
      store.set(
        "chatsState.isOpenMenu" as any,
        !store.getState().chatsState.isOpenMenu
      );
      store.set("chatsState.isOpenWindow" as any, true);
      store.set("modalWindow", {
        create: false,
        delete: false,
        change: false,
        changeAva: false,
        addUser: true,
        deleteUser: false,
        location: false,
        file: false,
        fotoOrVideo: false,
      });
    },
    deleteUser() {
      store.set(
        "chatsState.isOpenMenu" as any,
        !store.getState().chatsState.isOpenMenu
      );
      store.set("chatsState.isOpenWindow" as any, true);
      store.set("modalWindow", {
        create: false,
        delete: false,
        change: false,
        changeAva: false,
        addUser: false,
        deleteUser: true,
        location: false,
        file: false,
        fotoOrVideo: false,
      });
    },
  });
  closeWindow() {
    store.set("chatsState.isOpenWindow" as any, false);
  }
  openMenu() {
    store.set(
      "chatsState.isOpenMenu" as any,
      !store.getState().chatsState.isOpenMenu
    );
  }
  selectChat(chatId: number) {
    const newChatsList = store.getState().chats.map((chat: IChatsStore) => {
      if (chat.id === chatId) {
        return { ...chat, isSelected: true };
      }
      return { ...chat, isSelected: false };
    });
    store.set("chats", [...newChatsList]);
  }
  openMessages() {
    store.set("chatsState.isMessagesOpen" as any, true);
  }
  closeMessages() {
    store.set("chatsState.isMessagesOpen" as any, false);
  }
  actionsBottomBtn = () => ({
    fotoOrVideo() {
      store.set(
        "chatsState.isOpenBottomMenu" as any,
        !store.getState().chatsState.isOpenBottomMenu
      );
      store.set("chatsState.isOpenWindow" as any, true);
      store.set("modalWindow", {
        create: false,
        delete: false,
        change: false,
        addUser: false,
        deleteUser: false,
        location: false,
        file: false,
        fotoOrVideo: true,
        changeAva: false,
      });
    },

    file() {
      store.set(
        "chatsState.isOpenBottomMenu" as any,
        !store.getState().chatsState.isOpenBottomMenu
      );
      store.set("chatsState.isOpenWindow" as any, true);
      store.set("modalWindow", {
        create: false,
        delete: false,
        change: false,
        addUser: false,
        deleteUser: false,
        location: false,
        file: true,
        fotoOrVideo: false,
        changeAva: false,
      });
    },
    location() {
      store.set(
        "chatsState.isOpenBottomMenu" as any,
        !store.getState().chatsState.isOpenBottomMenu
      );
      store.set("chatsState.isOpenWindow" as any, true);
      store.set("modalWindow", {
        create: false,
        delete: false,
        change: false,
        addUser: false,
        deleteUser: false,
        location: true,
        file: false,
        fotoOrVideo: false,
        changeAva: false,
      });
    },
  });
  closeCurrentChat() {
    const newChatsList = store.getState().chats.map((chat: IChatsStore) => {
      return { ...chat, isSelected: false };
    });
    store.set("chatsState.isOpenMenu" as any, false);
    store.set("chatsState.isOpenBottomMenu" as any, false);
    store.set("chats", newChatsList);
  }
}
export default new ChatsController();
