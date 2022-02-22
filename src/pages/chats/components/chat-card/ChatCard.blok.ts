import { Block } from "../../../../modules/Block";
import template from "./chat-card.hbs";

export class ChatCard extends Block {
  static getComponentName = "ChatCard";

  render() {
    return `
      <card class="chats__chat-item">
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
