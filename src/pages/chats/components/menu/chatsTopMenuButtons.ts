import { chatsState } from "../../chats.state";
import { Menu } from "./Menu.block";

export const chatsTopMenuButtons = new Menu({
  events: {
    click: (event: Event) => {},
  },
  buttons: chatsState.chatsTopMenuButtons,
});
