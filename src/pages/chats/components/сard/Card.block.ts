import { Block } from "../../../../modules/Block/Block";
interface CardPropsI {
  isSelected: boolean;
  chatId: number;
  imageSrc: string;
  name: string;
  time: string;
  newMessageCount: string;
  lastMessage: string;
  selectChat: (number: number) => void;
  openMessages: () => void;
}
export class Card extends Block<CardPropsI> {
  static get componentName() {
    return "Card";
  }
  constructor({
    isSelected,
    chatId,
    imageSrc,
    name,
    lastMessage,
    time,
    newMessageCount,
    selectChat,
    openMessages,
  }: CardPropsI) {
    super({
      isSelected,
      chatId,
      imageSrc,
      name,
      lastMessage,
      time,
      newMessageCount,
      selectChat,
      openMessages,
      events: {
        click: () => {
          selectChat(Number(chatId));
          openMessages();
        },
      },
    });
  }
  render() {
    return `
      <card class="chats__chat-item ${
  this.props.isSelected === "true" ? "chats__chat-item_selected" : " "
}" id={{chatId}}>
        <div class="chats__pic-wrapper">
          <img src="{{{imageSrc}}}" class="chats__picture" alt="Картинка чата" />
        </div>
        <div class="chats__item-main-info">
          <p class="chats__name">{{name}}</p>
          <p class="chats__last-message"> {{lastMessage}}</p>
        </div>
        <div class="chats__item-info">
          <p class="chats__time">{{time}}</p>
          <div class="chats__new-message">
            <p class="chats__new-message-p"> {{newMessageCount}}</p>
          </div>
        </div>
      </card>
      `;
  }
}
