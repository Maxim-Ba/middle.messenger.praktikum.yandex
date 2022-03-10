import { Block } from "../../../../modules/Block/Block";
interface BottomMenuPropsI {
  isOpenBottomMenu: Record<string, any>;
  actionsBottomBtn: Record<string, any>;
  bottomMenuButtons: Record<string, any>;
}
export class BottomMenu extends Block<BottomMenuPropsI> {
  static get componentName() {
    return "BottomMenu";
  }
  constructor({
    isOpenBottomMenu,
    actionsBottomBtn,
    bottomMenuButtons,
  }: BottomMenuPropsI) {
    super({
      isOpenBottomMenu,
      actionsBottomBtn,
      bottomMenuButtons,
      events: {
        click: (event: Event) => {
          if (actionsBottomBtn[(event.target as HTMLElement).id]) {
            actionsBottomBtn[(event.target as HTMLElement).id]();
          }
        },
      },
    });
  }

  render() {
    return ` 
    <menu class="file-menu ${
      this.props.isOpenBottomMenu ? "" : "display-none"
    }">
      <div class="chats__menu-content">
      {{#each bottomMenuButtons}}
        <div class="chats__menue-item" id={{actionId}}>
          <img
            src={{iconSvg}}
            alt="#"
            class="chats__menue-item-img"
          />
          <p class="chats__menue-item-action">{{actionTitle}}</p>
        </div>
        {{/each}}
        </div>
    </menu>
    
    `;
  }
}
