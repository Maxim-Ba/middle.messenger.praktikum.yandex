import loginComponentController from "../../../../../controllers/LoginComponentController";
import { Block } from "../../../../../modules/Block/Block";

export class RegistrationButton extends Block<Record<string, any>> {
  static get componentName() {
    return "RegistrationButton";
  }
  constructor(props: Record<string, any> | undefined) {
    super({
      ...props,
      events: {
        click: () => {
          loginComponentController.goToRegistration();
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
