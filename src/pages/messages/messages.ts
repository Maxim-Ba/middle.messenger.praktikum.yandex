import { message } from "./components/message/message";
import { bottomMenu } from "./components/bottomMenu/bottomMenu";
import { topMenu } from "./components/topMenu/topMenu";
import { chatCards } from "./components/chat-card/chatCard";
import { messagesState } from "./messages.state";
import { Messages } from "./Messages.block";
import { modalWindow } from "../../components/modal-window/modalWindow";
import { render } from "../../utils/renderDOM";

const messages = new Messages({
  ...messagesState,
  events: {
    click: (event: Event) => {
      const chatsMenuBtn = document.querySelector(".chats__menu-btn");
      const messageMenuBtn = document.querySelector(".chats__file-menu");
      const chatsMenuOne = document.querySelector("#one-chat");
      const chatsMenuTwo = document.querySelector("#two-chat");
      const search = document.querySelector("#search");
      const searchField = document.querySelector(".chats__search");
      switch (event.target) {
        case chatsMenuBtn:
          chatsMenuOne?.classList.toggle("display-none");
          break;
        case messageMenuBtn:
          chatsMenuTwo?.classList.toggle("display-none");
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
  bottomMenu,
  message,
});

render("#root", messages);
