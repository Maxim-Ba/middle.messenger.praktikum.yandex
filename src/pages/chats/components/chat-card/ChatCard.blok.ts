import { Block } from "../../../../modules/Block/Block";
import { arrayToChildrenString } from "../../../../utils/arrayChildrenString";

interface ChatsI {
  chats: Record<string, any>;
  selectChat: Record<string, any>;
  openMessages: Record<string, any>;
}

export class ChatCard extends Block<ChatsI> {
  static get componentName() {
    return "ChatCard";
  }
  constructor({ chats, selectChat, openMessages }: ChatsI) {
    super({ chats, selectChat, openMessages });
  }
  render() {
    return `
    <div class="chats__list-of-chats">
    ${arrayToChildrenString("Card", this.props.chats, [
      { selectChat: this.props.selectChat },
      { openMessages: this.props.openMessages },
    ])}
    
    </div>    
    `;
  }
}
