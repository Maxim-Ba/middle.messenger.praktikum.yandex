import { chatsMenuButton } from "./../chatMenuButton/chat-menu-button";
import { chatsState } from "../../chats.state";
import { Menu } from "./Menu.block";

export const topMenuButtons = new Menu({
  events: {
    click: (event: Event) => {},
  },
  buttons: chatsState.topMenuButtons,
  chatsMenuButton,
});
