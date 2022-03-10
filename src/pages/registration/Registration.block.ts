import { Block } from "../../modules/Block/Block";
import { FormCheck } from "../../services/formCheck/FormCheck";
import { arrayToChildrenString } from "../../utils/arrayChildrenString";
import { registrationState } from "./registration.state";

export class Registration extends Block<Record<string, any>> {
  registration: HTMLElement | null;
  validator: FormCheck;
  constructor(props: Record<string, any> | undefined) {
    super(props);
  }
  render() {
    return `
    <div class="registration__wrapper">
      <main class="registration">
        <div class="title-wrapper">
          <h1 class="login-registration__title">{{TitleText.REGISTRATION}}</h1>
        </div>
        <form class="form" id="login-form">
          ${arrayToChildrenString("Input", registrationState.fields)}
            <div class="form-warning form-warning_pt-1rem" id="login__form-warning">
              <p class="form-warning-text visibility-hidden"></p>
            </div>
          
          <div class="registration__button-wrapper">
            <button class="button button_grey button_auth button_b-r-8px"><a
                href="../chats/chats.html"
                class="button"
              >{{ButtonTextRegistration.TO_LOGIN}}</a>
            </button>
            <button
              class="button button_blue button_auth button_b-r-8px"
              type="submit"
            >{{ButtonTextRegistration.REGISTRATION}}
            </button>
          </div>
        </form>
      </main>
    </div>
    `;
  }

  componentDidMount() {
    const formEl = document.getElementById("login-form");
    const infoEl = document.getElementById(
      "login__form-warning"
    )?.firstElementChild;
    if (formEl) {
      this.validator = new FormCheck(
        formEl as HTMLFormElement,
        console.log,
        infoEl as HTMLElement
      );
    }
  }
  componentWillUnmount(): void {
    if (this.validator) {
      this.validator.unistal();
    }
  }
}
