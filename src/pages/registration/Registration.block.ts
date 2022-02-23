import { Block } from "../../modules/Block";
import { Validator } from "../../modules/Validator";
import { arrayToChildrenString } from "../../utils/arrayChildrenString";
import { registrationState } from "./registration.state";

export class Registration extends Block {
  registration: HTMLElement | null;
  constructor(props) {
    super(props);
  }
  render() {
    return `
    <div class="registration__wrapper">
    <main class="registration">
      <div class="title-wrapper">
        <h1 class="login-registration__title">Регистрация</h1>
      </div>
    <form class="form" id="login-form">
      ${arrayToChildrenString("Input", registrationState.fields)}
        <div class="form-warning form-warning_pt-1rem" id="login__form-warning">
          <p class="form-warning-text visibility-hidden">Пароли не совпадают</p>
        </div>
      
      <div class="registration__button-wrapper">
        <button class="button button_grey button_auth button_b-r-8px"><a
            href="../chats/chats.html"
            class="button"
          >Войти</a>
        </button>
        <button
          class="button button_blue button_auth button_b-r-8px"
          type="submit"
        >Регистрация
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
      "login__form-warning",
    )?.firstElementChild;
    if (formEl) {
      const validator = new Validator(
        formEl as HTMLFormElement,
        console.log,
        infoEl as HTMLElement,
      );
    }
  }
}
