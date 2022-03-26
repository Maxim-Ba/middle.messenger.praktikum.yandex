import { Block } from "../../../../../modules/Block/Block";

export class SendRegistrationButton extends Block<Record<string, any>> {
  static get componentName() {
    return "SendRegistrationButton";
  }
  constructor(props: Record<string, any>) {
    super({
      ...props,
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
