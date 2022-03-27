import store from "../modules/Store/Store";
import {
  IChatsStore,
  IMessagesState,
  PREFIX,
} from "../modules/Store/StoreTypes";
import {
  ChatsAPI,
  CreateChatData,
  GetChatData,
  GetUsersChatData,
} from "../services/API/ChatsAPI";
import { WebSockeAPI } from "../services/API/WebSoketAPI";
import { UsersAPI } from "../services/API/UsersAPI";

class ChatsController {
  private api: ChatsAPI;
  private usersApi: UsersAPI;

  constructor() {
    this.api = new ChatsAPI();
    this.usersApi = new UsersAPI();
  }

  async getChats(data: GetChatData) {
    try {
      const getResponse = await this.api.getChats(data);
      if (getResponse.response.reason) {
        store.set("reason", getResponse.response.reason);
      }
      store.set("chats", this._fillChats(getResponse.response));
    } catch (e) {
      console.log(e);
    }
  }

  private _fillChats(chats: IChatsStore[]) {
    const fillChats = chats.map((chat) => {
      let { avatar } = chat;
      let { last_message } = chat;
      const isSelected = false;
      if (!chat.avatar) {
        avatar = store.getState().chatsState.svgDefault.svgDefaultChatPic;
      } else {
        avatar = PREFIX + chat.avatar;
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
          store.set("reason", usersResponse.response.reason);
          return;
        }
        store.set("chatUsers", usersResponse.response);
        this.closeWindow();
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getNewMessagesCount(chatId: number) {
    try {
      const newMessagesResponse = await this.api.getNewMessagesCount(chatId);
      if (newMessagesResponse.status !== 200) {
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
        avatar.append("chatId", selectedChat.id.toString());
        avatar.append("avatar", avatar.get("avatar-chat") as Blob);
        avatar.delete("avatar-chat");
        const avatarResponse = await this.api.uploadAvatar(avatar);
        if (avatarResponse.response.reason) {
          store.set("reason", avatarResponse.response.reason);
          return;
        }
        const newChatsList = store.getState().chats.map((chat) => {
          if (chat.id === avatarResponse.response.id) {
            return this.chatAdapter(avatarResponse.response);
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

  chatAdapter(chat: IChatsStore): IChatsStore {
    if (chat.avatar) {
      chat.avatar = PREFIX + chat.avatar;
      return chat;
    }
    chat.avatar = store.getState().chatsState.svgDefault.svgDefaultChatPic;
    return chat;
  }

  async addUsers(userName: string) {
    try {
      store.set("reason", null);
      const selectedUser: any = await this.usersApi.searchUserByLogin({
        login: userName,
      });
      if (selectedUser.response.reason) {
        store.set("reason", selectedUser.response.reason);
        return;
      }
      const selectedChat = store
        .getState()
        .chats.find((chat) => chat.isSelected);
      if (selectedChat && selectedUser.response[0].id) {
        const addUsersResponse = await this.api.addUsers({
          chatId: selectedChat.id,
          users: [selectedUser.response[0].id],
        });
        if (addUsersResponse?.response?.reason) {
          store.set("reason", addUsersResponse.response.reason);
          return;
        }
        this.closeWindow();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async deleteUsers(userName: string) {
    try {
      store.set("reason", null);
      const selectedUser = store
        .getState()
        .chatUsers?.find((user) => user.login === userName);
      const selectedChat = store
        .getState()
        .chats.find((chat) => chat.isSelected);
      if (selectedChat && selectedUser) {
        const deleteUsersResponse = await this.api.deleteUsers({
          chatId: selectedChat.id,
          users: [selectedUser.id],
        });
        if (deleteUsersResponse?.response?.reason) {
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
        console.log("Ошибка при получении токена для обмена сообщениями");
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

  closeWindow() {
    store.set("reason", null);

    store.set("chatsState.isOpenWindow" as any, false);
  }

  openMenu() {
    store.set(
      "chatsState.isOpenMenu" as any,
      !store.getState().chatsState.isOpenMenu
    );
  }
  async selectChat(chatId: number) {
    const { chats } = store.getState();
    for (let index = 0; index < chats.length; index++) {
      if (chats[index].id === chatId && chats[index].isSelected) {
        return;
      }
    }
    store.set("messages", []);

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
    const { chatUsers } = store.getState();

    const withDisplayNameMessages = messages.map((message) => {
      for (let index = 0; index < chatUsers!.length; index++) {
        if (message.user_id === (chatUsers![index].id as unknown as string)) {
          message.displayName = chatUsers![index].display_name;
          return message;
        }
      }
      return message;
    });

    store.set("messages", [
      ...store.getState().messages,
      ...withDisplayNameMessages.reverse(),
    ]);
  }

  addDisplayNameToMessage(messages: IMessagesState[]): IMessagesState[] {
    const { chatUsers } = store.getState();
    return messages.map((message) => {
      for (let index = 0; index < chatUsers!.length; index++) {
        if (message.user_id === chatUsers![index].id.toString()) {
          message.displayName = chatUsers![index].display_name;
          break;
        }
      }
      return message;
    });
  }

  sendMessage(data: { message: string }) {
    const webSockeAPI = store.getState().webSocket;

    webSockeAPI?.sendMessage(data.message as string);
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
    store.set("messages", []);
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
    const newChatsList = store
      .getState()
      .chats.map((chat: IChatsStore) => ({ ...chat, isSelected: false }));
    store.set("chatsState.isOpenMenu" as any, false);
    store.set("chatsState.isOpenBottomMenu" as any, false);
    store.set("chats", newChatsList);
  }
}
export default new ChatsController();
