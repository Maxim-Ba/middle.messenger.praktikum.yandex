import { messagesState } from "../../messages.state";
import { ChatCard } from "./ChatCard.blok";

export const chatCards = new ChatCard({
  events: {
    click: (event: Event) => {},
  },
  chats: messagesState.chats,
});
