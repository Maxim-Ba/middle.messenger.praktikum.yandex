import AuthController from "../../controllers/AuthController";
import { Block } from "../../modules/Block/Block";
import { LoginData } from "../../services/API/AuthAPI";
import { FormCheck } from "../../services/formCheck/FormCheck";
import { arrayToChildrenString } from "../../utils/arrayChildrenString";

export class Login extends Block<Record<string, any>> {
  classNamesReg: string;
  classNamesAuth: string;
  static get componentName() {
    return "Login";
  }
  validator: FormCheck;

  constructor(props: Record<string, any> | undefined) {
    super({ ...props });
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(data: LoginData) {
    AuthController.login(data);
  }

  render() {
    return `
      
    <div class="login__wrapper">
    <main class="login">
      <div class="title-wrapper">
        <h1 class="login-registration__title">
          {{TitleTextLogin.LOGIN}}
        </h1>
      </div>
      <form class="form" id="login-form">
        ${arrayToChildrenString("Input", this.props.fields)}
        <div class="form-warning form-warning_pt-3rem" id="login__form-warning">
          <p class="form-warning-text ${
  this.props.reason ? "" : "visibility-hidden"
}">{{reason}}</p>
        </div>
      
      <div class="login__button-wrapper">
      {{{RegistrationButton
        buttonText=ButtonTextLogin.TO_REGISTRATION
      }}}
      {{{AuthButton
        buttonText=ButtonTextLogin.LOGIN
      }}}
      </div>
      </form>
    </main>
  </div>`;
  }

  componentDidMount(): void {
    const formEl = this.getContent().querySelector("#login-form");
    if (formEl) {
      this.validator = new FormCheck(formEl as HTMLFormElement, this.onSignIn);
    }
  }
  componentWillUnmount(): void {
    if (this.validator) {
      this.validator.unistal();
    }
  }
}
