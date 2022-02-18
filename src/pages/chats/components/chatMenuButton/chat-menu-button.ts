import { ChatsMenuButton } from "./ChatMenuButton.block";

export const chatsMenuButton = new ChatsMenuButton({
  events: {
    click: (event: Event) => {
      console.log(event.currentTarget);
    },
  },
});
