import chatsController from "../../../controllers/ChatsController";
import { Block } from "../../../modules/Block/Block";

export class ButtonClose extends Block<any> {
  constructor(props: any) {
    super({
      ...props,
      events: {
        click: () => {
          chatsController.closeWindow();
        },
      },
    });
  }
  static get componentName() {
    return "ButtonClose";
  }
  render() {
    return `
            <button
              type="button"
              class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_grey"
            >
              Отмена
            </button>
    `;
  }
}
