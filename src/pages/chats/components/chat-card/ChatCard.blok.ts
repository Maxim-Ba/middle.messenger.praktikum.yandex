import { Block } from "../../../../modules/Block/Block";
interface ChatsI {
  chats: Record<string, any>;
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
    {{#each chats}}
    {{#if isSelected}}
      <card class="chats__chat-item chats__chat-item_selected" id={{chatId}}>
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
    {{else}}
      <card class="chats__chat-item" id={{chatId}}>
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
    {{/if}}
    {{/each }}
    </div>    `;
  }
}
