import { Block } from "../../../../../modules/Block/Block";
import { Router } from "../../../../../modules/Router/Router";

export class RegistrationButton extends Block<Record<string, any>> {
  static get componentName() {
    return "RegistrationButton";
  }
  constructor(props: Record<string, any> | undefined) {
    super({
      ...props,
      events: {
        click: () => {
          const router = new Router("#root");
          router.go("/registration");
        },
      },
    });
  }
  render() {
    return `
    <button
      class="button button_grey button_auth button_b-r-8px"
    >
      {{buttonText}}
    </button>
    `;
  }
}
