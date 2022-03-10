import { Block } from "../../../../modules/Block/Block";
interface MenuePropsI {
  topMenuButtons: Record<string, any>;
  actionsBtn: Record<string, any>;
  isOpenMenu: Record<string, any>;
}
export class Menu extends Block<MenuePropsI> {
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
          if (actionsBtn[(event.target as HTMLElement).id]) {
            actionsBtn[(event.target as HTMLElement).id]();
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
