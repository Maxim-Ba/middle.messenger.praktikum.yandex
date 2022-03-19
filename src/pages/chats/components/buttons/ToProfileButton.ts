import { Block } from "../../../../modules/Block/Block";
import { Router } from "../../../../modules/Router/Router";

export class ToProfileButton extends Block<Record<string, any>> {
  static get componentName() {
    return "ToProfileButton";
  }
  constructor(props: Record<string, any> | undefined) {
    super({
      ...props,
      events: {
        click: () => {
          const router = new Router();
          router.go("/settings");
        },
      },
    });
  }
  render() {
    return `
    <button
      class="button chats__button button_b-r-5px button_blue"
    >
      {{buttonText}}
    </button>
    `;
  }
}
