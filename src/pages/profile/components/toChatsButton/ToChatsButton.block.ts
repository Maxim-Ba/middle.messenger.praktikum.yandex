import { Block } from "../../../../modules/Block/Block";
import { Router } from "../../../../modules/Router/Router";

export class ToChatsButton extends Block<Record<string, any>> {
  static get componentName() {
    return "ToChatsButton";
  }
  constructor(props: Record<string, any> | undefined) {
    super({
      ...props,
      events: {
        click: () => {
          const router = new Router();
          router.go("/messenger");
        },
      },
    });
  }
  render() {
    return `
    <div class="profile__link">
      <img src={{picArrow}} alt="Аватар пользователя" class="profile__arrow" />
    </div>
    `;
  }
}
