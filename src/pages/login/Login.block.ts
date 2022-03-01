import { Block } from "../../modules/Block/Block";
import { FormCheck } from "../../services/formCheck/FormCheck";
import { arrayToChildrenString } from "../../utils/arrayChildrenString";
import { loginState } from "./login.state";

export class Login extends Block<Record<string, any>> {
  static getComponentName = "Login";
  validator: FormCheck;

  constructor(props: Record<string, any> | undefined) {
    super(props);
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
        ${arrayToChildrenString("Input", loginState.fields)}
        <div class="form-warning form-warning_pt-3rem" id="login__form-warning">
          <p class="form-warning-text visibility-hidden">Неверный логин или пароль</p>
        </div>
      
      <div class="login__button-wrapper">
        <button class="button button_grey button_auth button_b-r-8px"><a
            href="../registration/registration.html"
            class="login__link-to-reg button"
          >{{ButtonTextLogin.TO_REGISTRATION}}</a></button>
        <button
          type="submit"
          class="button button_blue button_auth button_b-r-8px" id="auth-btn" for="login-form"
        >{{ButtonTextLogin.LOGIN}}</button>
      </div>
      </form>
    </main>
  </div>`;
  }
  componentDidUpdate(_oldProps: any, _newProps: any): boolean {
    return true;
  }
  componentDidMount(): void {
    const formEl = document.getElementById("login-form");
    if (formEl) {
      this.validator = new FormCheck(formEl as HTMLFormElement);
    }
  }
  componentWillUnmount(): void {
    if (this.validator) {
      this.validator.unistal();
    }
  }
}
