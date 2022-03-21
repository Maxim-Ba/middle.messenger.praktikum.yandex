import { Block } from "../../../../modules/Block/Block";
import { IChatsStore } from "../../../../modules/Store/StoreTypes";
import { arrayToChildrenString } from "../../../../utils/arrayChildrenString";

interface ChatsI {
  chats: IChatsStore[];
}

export class ChatCard extends Block<ChatsI> {
  static get componentName() {
    return "ChatCard";
  }
  constructor({ chats }: ChatsI) {
    super({ chats });
  }
  render() {
    return `
    <div class="chats__list-of-chats">
    ${arrayToChildrenString("Card", this.props.chats)}
    
    </div>    
    `;
  }
}
