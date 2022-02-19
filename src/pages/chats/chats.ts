import { topMenu } from "./components/menu/topMenu";
import { chatCards } from "./components/chat-card/chatCard";
import { chatsState, EnumChatActions } from "./chats.state";
import { Chats } from "./Chats.block";
import { modalWindow } from "../../components/modal-window/modalWindow";
import { render } from "../../utils/renderDOM";

const chats = new Chats({
  ...chatsState,
  events: {
    click: (event: Event) => {
      const chatsMenuBtn = document.querySelector(".chats__menu-btn");
      const chatsMenu = document.querySelector("#chats");
      const search = document.querySelector("#search");
      const searchField = document.querySelector(".chats__search");
      switch (event.target) {
        case chatsMenuBtn:
          chatsMenu?.classList.toggle("display-none");
          break;
        case search:
          searchField?.classList.toggle("display-none");
          break;
        default:
          break;
      }
    },
  },
  topMenu,
  modal: modalWindow,
  chatCards,
});

render("#root", chats);
