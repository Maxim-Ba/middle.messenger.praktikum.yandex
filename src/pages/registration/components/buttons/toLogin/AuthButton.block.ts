import RegistrationComponentController from "../../../../../controllers/RegistrationComponentController";
import { Block } from "../../../../../modules/Block/Block";

export class ToLoginButtonFromReg extends Block<Record<string, any>> {
  static get componentName() {
    return "ToLoginButtonFromReg";
  }
  constructor(props: Record<string, any> | undefined) {
    super({
      ...props,
      events: {
        click: () => {
          RegistrationComponentController.goToLogin();
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
