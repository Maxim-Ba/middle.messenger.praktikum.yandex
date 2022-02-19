import { Message } from "./Message.block";

export const message = new Message({
  events: {
    click: (event: Event) => {
      console.log("click on message");
    },
  },
});
