import { topMenuButtons } from "./components/menu/topMenuButtons";
import { chatCards } from "./components/chat-card/chatCard";
import { chatsMenuButton } from "./components/chatMenuButton/chat-menu-button";
import { chatsState, EnumChatActions } from "./chats.state";
import { Chats } from "./Chats.block";
import { modalWindow } from "../../components/modal-window/modalWindow";
import { render } from "../../utils/renderDOM";

const chats = new Chats({
  ...chatsState,
  events: {
    click: (event: Event) => {
      const modal = document.querySelector("#modal-window");
      const msgMenuBtn = document.querySelector(".chats__file-menu");
      const chatsMenuBtn = document.querySelector(".chats__menu-btn");
      const fileMenu = document.querySelector(".file-menu");
      const chatsMenu = document.querySelector("#chats");
      const createChat = document.querySelector(
        `#${EnumChatActions.CREATE_CHAT}`,
      );
      switch (event.target) {
        case msgMenuBtn:
          fileMenu?.classList.toggle("display-none");
          break;
        case chatsMenuBtn:
          chatsMenu?.classList.toggle("display-none");
          break;
        case createChat:
          modal?.classList.remove("display-none");

          break;
        default:
          break;
      }
    },
  },
  topMenuButtons,
  modal: modalWindow,
  chatCards,
});

render("#root", chats);
