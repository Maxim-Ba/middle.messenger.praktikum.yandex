import AuthController from "../../controllers/AuthController";
import { Block } from "../../modules/Block/Block";

export class ToChatsButtonError extends Block<Record<string, any>> {
  static get componentName() {
    return "ToChatsButtonError";
  }
  constructor(props: Record<string, any>) {
    super({
      ...props,
      events: {
        click: () => {
          AuthController.goToChats();
        },
      },
    });
  }

  render() {
    return `
      <button type="button" class="page-error__go-back" >Назад к чатам</button>
    `;
  }
}
