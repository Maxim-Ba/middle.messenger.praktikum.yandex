enum warningMessages {
  login = "Логин: от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, (допустимы дефис и нижнее подчёркивание ",
  first_name = "Имя: латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, допустим только дефис ",
  second_name = "Фамилия: латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, допустим только дефис ",
  email = "не соответствует email ",
  password = "Пароль: от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра ",
  newPassword = "Новый пароль: от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра, пароли должны совпадать",
  oldPassword = "Старый пароль: не должен быть пустым",
  phone = "Тел.:от 10 до 15 символов, может начинается с плюса ",
  message = "не должно быть пустым ",
}
export class Validator {
  formEl: HTMLFormElement;
  inputs: NodeListOf<HTMLInputElement>;
  actionCB: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
  };
  infoEl: null | HTMLElement;
  buttonSubmit: null | HTMLButtonElement;
  constructor(
    formEl: HTMLFormElement,
    actionCB = console.log,
    infoEl: null | HTMLElement = null,
    buttonSubmit: null | HTMLButtonElement = null,
  ) {
    this.formEl = formEl;
    this.inputs = this.formEl.querySelectorAll("input");
    this.actionCB = actionCB;
    this.infoEl = infoEl;
    this.buttonSubmit = buttonSubmit;
    this.onSubmit = this.onSubmit.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
    this._init();
  }
  _init() {
    this.formEl.addEventListener("submit", this.onSubmit);
    if (!this.infoEl) {
      return;
    }
    this.inputs.forEach((inp) => {
      inp.addEventListener("focus", this.checkValidity);
      inp.addEventListener("blur", this.checkValidity);
      inp.setAttribute("required", "");
      switch (inp.name) {
      case "login":
        inp.pattern = "^(?=.*[A-Za-z_-])[A-Za-z_0-9-]{3,20}$";
        break;
      case "name":
        inp.pattern = "^[А-ЯЁA-Z][а-яёa-z-]+$";
        break;
      case "first_name":
        inp.pattern = "^[А-ЯЁA-Z][а-яёa-z-]+$";
        break;
      case "second_name":
        inp.pattern = "^[А-ЯЁA-Z][а-яёa-z-]+$";
        break;
      case "email":
        inp.pattern = "^[A-Za-z_0-9-]+@[A-Za-z]+\\.[A-Za-z]+$";
        break;
      case "password":
        inp.pattern = "^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*_-]{8,40}$";
        break;
      case "oldPassword":
        inp.pattern = "^.{1,40}$";
        break;
      case "newPassword":
        inp.pattern = "^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*_-]{8,40}$";
        break;
      case "phone":
        inp.pattern = "^\\+?[\\d]{10,15}$";
        break;
      case "message":
        inp.pattern = "^.+$";
        break;
      default:
        break;
      }
    });
  }
  unistal() {
    this.formEl.removeEventListener("submit", this.onSubmit);
    this.inputs.forEach((inp) => {
      inp.removeEventListener("focus", this.checkValidity);
    });
    this.inputs.forEach((inp) => {
      inp.removeEventListener("blur", this.checkValidity);
    });
  }
  checkValidity(_) {
    const isValid = this.formEl.checkValidity();
    let warningMessage = "";
    if (isValid) {
      this.infoEl?.classList.add("visibility-hidden");
    } else {
      const wrongInputIndex = [...this.inputs].findIndex((inp, index) => {
        if (inp.name === "newPassword") {
          return inp.value !== this.inputs[index + 1].value;
        }
        return !inp.validity.valid;
      });
      warningMessage = warningMessages[this.inputs[wrongInputIndex].name];

      this.infoEl?.classList.remove("visibility-hidden");
      this.infoEl!.textContent = warningMessage;
    }
    this.buttonSubmit = this.buttonSubmit
      ? this.buttonSubmit
      : (this.formEl.querySelector(
        "button[type='submit']",
      ) as HTMLButtonElement);

    this.buttonSubmit!.disabled = !isValid;
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.infoEl) {
      this.checkValidity(event);
    }
    this.actionCB(...new FormData(this.formEl).entries());
  }
}
