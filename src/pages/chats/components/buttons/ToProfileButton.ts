import { Block } from "../../../../modules/Block/Block";
import router from "../../../../modules/Router/Router";

export class ToProfileButton extends Block<Record<string, any>> {
  static get componentName() {
    return "ToProfileButton";
  }
  constructor(props: object) {
    super({
      ...props,
      events: {
        click: () => {
          router.go("/settings");
        },
      },
    });
  }
  render() {
    return `
    <button
      class="button chats__button button_b-r-5px button_blue"
      type="button"
    >
      {{buttonText}}
    </button>
    `;
  }
}
