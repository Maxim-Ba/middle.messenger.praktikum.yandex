import { Block } from "../../../../../modules/Block/Block";
import { Router } from "../../../../../modules/Router/Router";

export class SendRegistrationButton extends Block<Record<string, any>> {
  static get componentName() {
    return "SendRegistrationButton";
  }
  constructor(props: Record<string, any> | undefined) {
    super({
      ...props,
      events: {
        click: () => {
          // console.log("fetch");
          // console.log("...");
          // const router = new Router();
          // router.go("/messenger");
        },
      },
    });
  }

  render() {
    return `
    <button
      type="submit"
      disabled
      class="button button_blue button_auth button_b-r-8px"
    >
      {{buttonText}}
    </button>
    `;
  }
}
