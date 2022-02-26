import { Block } from "../../../../modules/Block";
interface MenuePropsI {
  topMenuButtons: Record<string, any>;
  actionsBtn: Record<string, any>;
  isOpenMenu: Record<string, any>;
}
export class Menu extends Block {
  static get componentName() {
    return "Menu";
  }
  constructor({ topMenuButtons, actionsBtn, isOpenMenu }: MenuePropsI) {
    super({
      topMenuButtons,
      actionsBtn,
      isOpenMenu,
      events: {
        click: (event: Event) => {
          switch (event.target) {
            case document.getElementById("create"):
              actionsBtn["create"]();
              break;
            case document.getElementById("delete"):
              actionsBtn["delete"]();
              break;
            case document.getElementById("change"):
              actionsBtn["change"]();
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
