import { Block } from "../../../../modules/Block";

export class MenuMessages extends Block {
  static getComponentName = "Menu";
  constructor({ chatsTopMenuButtons, actionMessagesBtns, isOpenMenu }) {
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
