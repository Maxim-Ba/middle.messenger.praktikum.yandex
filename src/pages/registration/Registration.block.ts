import AuthController from "../../controllers/AuthController";
import { Block } from "../../modules/Block/Block";
import { SignupData } from "../../services/API/AuthAPI";
import { FormCheck } from "../../services/formCheck/FormCheck";
import { arrayToChildrenString } from "../../utils/arrayChildrenString";
import { registrationState, RegistrationStateType } from "./registration.state";
export class Registration extends Block<RegistrationStateType> {
  registration: HTMLElement | null;
  validator: FormCheck;
  constructor(
    props: RegistrationStateType & { reason: string; isLoading: boolean }
  ) {
    super({
      ...props,
    });
    this.onSignUp = this.onSignUp.bind(this);
  }
  onSignUp(data: SignupData) {
    AuthController.signup(data);
  }
  render() {
    return `
    <div class="registration__wrapper">
      <main class="registration">
      ${this.props.isLoading ? "{{{Loader}}}" : ""}
        <div class="title-wrapper">
          <h1 class="login-registration__title">{{TitleText.REGISTRATION}}</h1>
        </div>
        <form class="form" id="login-form">
          ${arrayToChildrenString("Input", registrationState.fields)}
            <div class="form-warning form-warning_pt-1rem" id="login__form-warning">
              <p class="form-warning-text visibility-hidden"></p>
            </div>
          
          <div class="registration__button-wrapper">
            {{{ToLoginButtonFromReg
              buttonText=ButtonTextRegistration.TO_LOGIN
            }}}
            {{{SendRegistrationButton
              buttonText=ButtonTextRegistration.REGISTRATION
            }}}  
          </div>
        </form>
      </main>
    </div>
    `;
  }

  componentDidMount() {
    const formEl = this.getContent().querySelector("#login-form");
    const infoEl = this.getContent().querySelector(
      "#login__form-warning"
    )?.firstElementChild;
    if (formEl) {
      this.validator = new FormCheck(
        formEl as HTMLFormElement,
        this.onSignUp,
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
