import { Block } from "../../../../modules/Block/Block";
interface BackToChatListBtnI {
  svgDefault: Record<string, any>;
  closeCurrentChat: Record<string, any>;
  closeMessages: Record<string, any>;
}
export class BackToChatListBtn extends Block<BackToChatListBtnI> {
  static get componentName() {
    return "BackToChatListBtn";
  }
  constructor({
    svgDefault,
    closeMessages,
    closeCurrentChat,
  }: BackToChatListBtnI) {
    super({
      svgDefault,
      closeMessages,
      closeCurrentChat,
      events: {
        click: () => {
          this.props.closeCurrentChat();
          this.props.closeMessages();
          console.log("<<==");
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
