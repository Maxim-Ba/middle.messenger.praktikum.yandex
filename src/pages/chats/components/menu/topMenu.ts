import { chatsState } from "../../chats.state";
import { Menu } from "./Menu.block";

export const topMenu = new Menu({
  events: {
    click: (event: Event) => {
      const modal = document.querySelector("#modal-window");
      console.log(modal, "<---modal");
      modal?.classList.remove("display-none");
    },
  },

  buttons: chatsState.topMenuButtons,
});
