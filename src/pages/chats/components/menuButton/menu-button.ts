import { chatsState } from "./../../chats.state";
import { MenuButtons } from "./MenuButton.block";

export const menuButtons = new MenuButtons({
  events: {
    click: (event: Event) => {
      console.log(event.currentTarget);
    },
  },
});
