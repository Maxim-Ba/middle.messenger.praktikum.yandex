import chatsController from "../../../../controllers/ChatsController";
import { Block } from "../../../../modules/Block/Block";
interface BackToChatListBtnI {
  svgDefault: Record<string, any>;
}
export class BackToChatListBtn extends Block<BackToChatListBtnI> {
  static get componentName() {
    return "BackToChatListBtn";
  }
  constructor({ svgDefault }: BackToChatListBtnI) {
    super({
      svgDefault,
      events: {
        click: () => {
          chatsController.closeCurrentChat();
          chatsController.closeMessages();
          chatsController.closeWS();
        },
      },
    });
  }
  render() {
    return `
    <div class="chats__link">
      <img src={{svgDefault.svgArrowLeft}} alt="Свернуть чат" class="chats__arrow" />
    </div>
    `;
  }
}
