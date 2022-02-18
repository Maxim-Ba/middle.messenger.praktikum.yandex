import { chatsState } from "../../chats.state";
import { Menu } from "./Menu.block";

export const bottomMenuButtons = new Menu({
  events: {
    click: (event: Event) => {},
  },
  buttons: chatsState.bottomMenuButtons,
});
