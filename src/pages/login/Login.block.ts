import { Input } from "../../components/input/Input.block";
import { Block } from "../../modules/Block";
import { Validator } from "../../modules/Validator";
import { arrayToChildrenString } from "../../utils/arrayChildrenString";
import { loginState } from "./login.state";

export class Login extends Block {
  static getComponentName = "Login";

  constructor(props) {
    super(props);
  }
  initChildren() {
    this.children.input = new Input({
      events: {
        click: (event: Event) => {
          console.log("input click");
        },
      },
    });
  }
  render() {
    //language html
    return `
      
    <div class="login__wrapper">
    <main class="login">
      <div class="title-wrapper">
        <h1 class="login-registration__title">
          Вход
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
          >Впервые?</a></button>
        <button
          type="submit"
          class="button button_blue button_auth button_b-r-8px" id="auth-btn" for="login-form"
        >Авторизоваться</button>
      </div>
      </form>
    </main>
  </div>`;
  }
  componentDidUpdate(oldProps: any, newProps: any): boolean {
    console.log(oldProps, newProps);
    console.log(this.props, this);

    if (oldProps.value !== newProps.value) {
      this.children.input.setProps({
        value: newProps.value,
      });
      return true;
    }
    return false;
  }
  componentDidMount(): void {
    const formEl = document.getElementById("login-form");
    if (formEl) {
      const validator = new Validator(formEl as HTMLFormElement);
    }
  }
}
