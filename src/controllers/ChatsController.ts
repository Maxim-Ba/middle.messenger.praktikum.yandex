import store from "../modules/Store/Store";
import { IChatsStore, IMessagesState } from "../modules/Store/StoreTypes";
import {
  ChatsAPI,
  CreateChatData,
  GetChatData,
  GetUsersChatData,
} from "../services/API/ChatsAPI";
import svgDefaultChatPic from "../../static/img/Chat-picture.svg";
import { WebSockeAPI } from "../services/API/WebSoketAPI";

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
          user: {
            avatar: "",
            email: "",
            first_name: "",
            login: "",
            phone: "",
            second_name: "",
          },
        };
      }
      return { ...chat, avatar, isSelected, last_message };
    });

    return fillChats;
  }
  async createChat(data: CreateChatData) {
    try {
      store.set("reason", null);
      const createResponse = await this.api.createChat(data);
      if (createResponse.response.reason) {
        console.log(createResponse.response.reason);
        store.set("reason", createResponse.response.reason);
        return;
      }
      this.closeWindow();
      await this.getChats({ limit: 100, offset: 0, title: "" });
    } catch (e) {
      console.log(e);
    }
  }
  async deleteChats() {
    try {
      store.set("reason", null);
      const selectChat = store
        .getState()
        .chats.filter((chat) => chat.isSelected);
      const deleteResponse = await this.api.deleteChats({
        chatId: selectChat[0].id,
      });
      if (deleteResponse.status !== 200) {
        console.log(deleteResponse.response.reason);
        store.set("reason", deleteResponse.response.reason);
        return;
      }
      this.closeWindow();
      this.closeMessages();
      this.closeCurrentChat();
      await this.getChats({ limit: 100, offset: 0, title: "" });
    } catch (e) {
      console.log(e);
    }
  }
  async getUsersChat() {
    try {
      store.set("reason", null);
      const selectedChat = store
        .getState()
        .chats.find((chat) => chat.isSelected);
      if (selectedChat) {
        const params: GetUsersChatData = {
          id: selectedChat.id,
          params: {
            email: "",
            limit: 100,
            offset: 0,
            name: "",
          },
        };
        const usersResponse = await this.api.getUsersChat(params);
        if (usersResponse.response.reason) {
          console.log(usersResponse.response.reason);
          store.set("reason", usersResponse.response.reason);
          return;
        }
        console.log(usersResponse.response);
        store.set("chatUsers", usersResponse.response);
        this.closeWindow();
      }
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
  async uploadAvatar(avatar: FormData) {
    try {
      store.set("reason", null);
      const selectedChat = store
        .getState()
        .chats.find((chat) => chat.isSelected);
      if (selectedChat) {
        const avatarResponse = await this.api.uploadAvatar({
          chatId: selectedChat.id,
          avatar,
        });
        if (avatarResponse.response.reason) {
          console.log(avatarResponse.response.reason);
          store.set("reason", avatarResponse.response.reason);
          return;
        }
        const newChatsList = store.getState().chats.map((chat) => {
          if (chat.id === avatarResponse.response.id) {
            return avatarResponse.response;
          } else {
            return chat;
          }
        });
        store.set("chats", newChatsList);
        this.closeWindow();
      }
    } catch (e) {
      console.log(e);
    }
  }
  async addUsers(userName: string) {
    try {
      store.set("reason", null);
      const selectedUser = store.getState().chatUsers?.find((user) => {
        return user.display_name === userName;
      });
      const selectedChat = store
        .getState()
        .chats.find((chat) => chat.isSelected);
      if (selectedChat && selectedUser) {
        const addUsersResponse = await this.api.addUsers({
          chatId: selectedChat.id,
          users: [selectedUser?.id],
        });
        console.log(addUsersResponse.response);
        if (addUsersResponse.response.reason) {
          console.log(addUsersResponse.response.reason);
          store.set("reason", addUsersResponse.response.reason);
          return;
        }
        this.closeWindow();
      } else {
        store.set("reason", "Пользователя с таким именем нет");
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }
  async deleteUsers(userName: string) {
    try {
      store.set("reason", null);
      const selectedUser = store.getState().chatUsers?.find((user) => {
        return user.display_name === userName;
      });
      const selectedChat = store
        .getState()
        .chats.find((chat) => chat.isSelected);
      if (selectedChat && selectedUser) {
        const deleteUsersResponse = await this.api.deleteUsers({
          chatId: selectedChat.id,
          users: [selectedUser.id],
        });
        if (deleteUsersResponse.response.reason) {
          console.log(deleteUsersResponse.response.reason);
          store.set("reason", deleteUsersResponse.response.reason);
          return;
        }
        this.closeWindow();
      } else {
        store.set("reason", "Пользователя с таким именем нет");
      }
    } catch (e) {
      console.log(e);
    }
  }
  async getToken(id: number) {
    try {
      const tokenResponse = await this.api.getToken(id);
      if (tokenResponse.response.reason) {
        console.log(tokenResponse.response.reason);
        alert("Ошибка при получении токена для обмена сообщениями");
        return;
      }
      store.set("token", tokenResponse.response.token);
      return true;
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
  async selectChat(chatId: number) {
    store.getState().chats.forEach((chat: IChatsStore) => {
      if (chat.id === chatId && chat.isSelected) {
        console.log(chat.id, chat.isSelected);
        return;
      }
    });

    const newChatsList = store.getState().chats.map((chat: IChatsStore) => {
      if (chat.id === chatId) {
        return { ...chat, isSelected: true };
      }
      return { ...chat, isSelected: false };
    });
    store.set("chats", [...newChatsList]);
    await this.getUsersChat();
    const isToken = await this.getToken(chatId);
    if (isToken) {
      const { currentUser, token } = store.getState();
      if (currentUser && token) {
        store.getState().webSocket?.closeWS();
        const webSockeAPI = new WebSockeAPI(
          new WebSocket(
            `wss://ya-praktikum.tech/ws/chats/${currentUser.id}/${chatId}/${token}`
          ),
          this.getMessages
        );
        store.set("webSocket", webSockeAPI);
      }
    }
  }
  getMessages(messages: IMessagesState[]) {
    store.set("messages", [store.getState().messages, ...messages]);
  }
  sendMessage(message: FormData) {
    const webSockeAPI = store.getState().webSocket;
    const value = message.get("message");
    console.log(value);
    webSockeAPI?.sendMessage(value as string);
  }
  closeWS() {
    const webSockeAPI = store.getState().webSocket;
    webSockeAPI?.closeWS();
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
