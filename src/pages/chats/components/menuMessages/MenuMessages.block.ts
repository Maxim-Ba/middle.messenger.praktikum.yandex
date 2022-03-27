import chatsController from "../../../../controllers/ChatsController";
import { Block } from "../../../../modules/Block/Block";
import { IMenuButton } from "../../../../modules/Store/StoreTypes";
interface MenuMessagesPropsI {
  chatsTopMenuButtons: IMenuButton[];
  isOpenMenu: boolean;
}
export class MenuMessages extends Block<MenuMessagesPropsI> {
  static get componentName() {
    return "MenuMessages";
  }
  actionMessagesBtns = chatsController.actionMessagesBtns();

  constructor({ chatsTopMenuButtons, isOpenMenu }: MenuMessagesPropsI) {
    super({
      chatsTopMenuButtons,
      isOpenMenu,
      events: {
        click: (event: Event) => {
          //@ts-ignore
          if (this.actionMessagesBtns[(event.target as HTMLElement).id]) {
            //@ts-ignore
            this.actionMessagesBtns[(event.target as HTMLElement).id]();
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
      {{#each chatsTopMenuButtons}}
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
