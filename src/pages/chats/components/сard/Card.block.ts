import chatsController from "../../../../controllers/ChatsController";
import { Block } from "../../../../modules/Block/Block";
import { IChatsStore } from "../../../../modules/Store/StoreTypes";
interface CardPropsI extends IChatsStore {
  isSelected: boolean;
  selectChat: (number: number) => void;
  openMessages: () => void;
}
export class Card extends Block<CardPropsI> {
  static get componentName() {
    return "Card";
  }
  constructor(props: CardPropsI) {
    super({
      ...props,
      events: {
        click: () => {
          chatsController.selectChat(Number(this.props.id));
          chatsController.openMessages();
        },
      },
    });
  }

  render() {
    return `
      <card class="chats__chat-item ${
        this.props.isSelected === "true" ? "chats__chat-item_selected" : " "
      }" id={{id}}>
        <div class="chats__pic-wrapper">
          <img src="{{{avatar}}}" class="chats__picture" alt="Картинка чата" />
        </div>
        <div class="chats__item-main-info">
          <p class="chats__name">{{title}}</p>
          <p class="chats__last-message">{{last_message.content}}</p>
        </div>
        <div class="chats__item-info">
          <p class="chats__time">{{last_message.time}}</p>
          <div class="chats__new-message">
            <p class="chats__new-message-p">{{unread_count}}</p>
          </div>
        </div>
      </card>
      `;
  }
}
