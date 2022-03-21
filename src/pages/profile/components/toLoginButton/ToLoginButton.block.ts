import authController from "../../../../controllers/AuthController";
import { Block } from "../../../../modules/Block/Block";

export class ToLoginButton extends Block<Record<string, any>> {
  static get componentName() {
    return "ToLoginButton";
  }
  constructor(props: Record<string, any> | undefined) {
    super({
      ...props,
      events: {
        click: () => {
          authController.logout();
        },
      },
    });
  }
  render() {
    return `
    <button
      type="button"
      class="profile__change-data profile__change-data_red"
    >
      {{buttonText}}
    </button>
    `;
  }
}
