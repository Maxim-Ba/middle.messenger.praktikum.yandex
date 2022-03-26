import chatsController from "../../../../controllers/ChatsController";
import { Block } from "../../../../modules/Block/Block";
interface TopButtonPropsI {
  svgDefault: string;
}
export class TopButton extends Block<TopButtonPropsI> {
  static get componentName() {
    return "TopButton";
  }
  constructor({ svgDefault }: TopButtonPropsI) {
    super({
      svgDefault,
      events: {
        click: chatsController.openMenu,
      },
    });
  }
  render() {
    return `
      <img class="chats__menu-btn" src={{svgDefault.svgMenu}} alt="меню" />
    `;
  }
}
