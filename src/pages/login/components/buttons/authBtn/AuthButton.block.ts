import { Block } from "../../../../../modules/Block/Block";

export class AuthButton extends Block<Record<string, any>> {
  static get componentName() {
    return "AuthButton";
  }
  constructor(props: {} | undefined) {
    super({
      ...props,
    });
  }
  render() {
    return `
    <button
      class="button button_blue button_auth button_b-r-8px"
      id="auth-btn" 
      for="login-form"
      type="submit"

    >
      {{buttonText}}
    </button>
    `;
  }
}
