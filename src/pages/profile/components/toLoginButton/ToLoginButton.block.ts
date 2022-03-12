import { Block } from "../../../../modules/Block/Block";
import { Router } from "../../../../modules/Router/Router";

export class ToLoginButton extends Block<Record<string, any>> {
  static get componentName() {
    return "ToLoginButton";
  }
  constructor(props: Record<string, any> | undefined) {
    super({
      ...props,
      events: {
        click: () => {
          const router = new Router("#root");
          router.go("/");
          console.log("loguot...");
        },
      },
    });
  }
  render() {
    return `
    <button
      class="profile__change-data profile__change-data_red"
    >
      {{buttonText}}
    </button>
    `;
  }
}
