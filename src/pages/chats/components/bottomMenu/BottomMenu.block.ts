import ChatsController from "../../../../controllers/ChatsController";
import { Block } from "../../../../modules/Block/Block";
import { IChatViewState } from "../../../../modules/Store/StoreTypes";
interface BottomMenuPropsI extends IChatViewState {
  isOpenBottomMenu: boolean;
}
export class BottomMenu extends Block<BottomMenuPropsI> {
  static get componentName() {
    return "BottomMenu";
  }
  actionsBottomBtn = ChatsController.actionsBottomBtn();

  constructor({ isOpenBottomMenu, bottomMenuButtons }: BottomMenuPropsI) {
    super({
      isOpenBottomMenu,
      bottomMenuButtons,
      events: {
        click: (event: Event) => {
          if (this.actionsBottomBtn[(event.target as HTMLElement).id]) {
            this.actionsBottomBtn[(event.target as HTMLElement).id]();
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
