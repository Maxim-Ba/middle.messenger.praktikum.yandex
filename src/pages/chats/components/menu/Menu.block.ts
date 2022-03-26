import ChatsController from "../../../../controllers/ChatsController";
import { Block } from "../../../../modules/Block/Block";
interface MenuePropsI {
  topMenuButtons: Record<string, any>;
  isOpenMenu: boolean;
}
export class Menu extends Block<MenuePropsI> {
  static get componentName() {
    return "Menu";
  }
  actionsBtn = ChatsController.actionsBtn();
  constructor({ topMenuButtons, isOpenMenu }: MenuePropsI) {
    super({
      topMenuButtons,
      isOpenMenu,
      events: {
        click: (event: Event) => {
          if (this.actionsBtn[(event.target as HTMLElement).id]) {
            this.actionsBtn[(event.target as HTMLElement).id]();
          }
        },
      },
    });
  }
  render() {
    return `
    <menu class="chats__menu ${
      this.props.isOpenMenu ? "" : "display-none"
    }" id="chats">
        <div class="chats__menu-content">
          {{#each topMenuButtons}}
            <div class="chats__menue-item" id={{actionId}}>
              <img src={{iconSvg}} alt="#" class="chats__menue-item-img" />
              <p class="chats__menue-item-action">{{actionTitle}}</p>
            </div>
          {{/each}}
        </div>
    </menu>
  
  `;
  }
}
