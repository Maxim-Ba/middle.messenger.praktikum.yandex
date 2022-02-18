import { chatsState } from "./../../chats.state";
import { ChatCard } from "./ChatCard.blok";

export const chatCards = new ChatCard({
  events: {
    click: (event: Event) => {},
  },
  chats: chatsState.chats,
});
