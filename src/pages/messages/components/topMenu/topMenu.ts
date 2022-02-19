import { messagesState } from "../../messages.state";
import { Menu } from "./Menu.block";

export const topMenu = new Menu({
  events: {
    click: (event: Event) => {},
  },

  buttons: messagesState.messagesTopMenuButtons,
});
