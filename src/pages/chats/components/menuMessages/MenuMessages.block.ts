import { Block } from "../../../../modules/Block/Block";
interface MenuMessagesPropsI {
  chatsTopMenuButtons: Record<string, any>;
  actionMessagesBtns: Record<string, any>;
  isOpenMenu: Record<string, any>;
}
export class MenuMessages extends Block<MenuMessagesPropsI> {
  static get componentName() {
    return "MenuMessages";
  }
  constructor({
    chatsTopMenuButtons,
    actionMessagesBtns,
    isOpenMenu,
  }: MenuMessagesPropsI) {
    super({
      chatsTopMenuButtons,
      actionMessagesBtns,
      isOpenMenu,
      events: {
        click: (event: Event) => {
          switch (event.target) {
          case document.getElementById("addUser"):
            actionMessagesBtns["addUser"]();
            break;
          case document.getElementById("deleteUser"):
            actionMessagesBtns["deleteUser"]();
            break;
          default:
            break;
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
