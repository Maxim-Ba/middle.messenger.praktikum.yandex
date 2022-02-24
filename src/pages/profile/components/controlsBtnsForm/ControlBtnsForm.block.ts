import { Block } from "../../../../modules/Block";

export class ControlBtnsForm extends Block {
  static getComponentName = "ControlBtnsForm";

  constructor(props) {
    super({ ...props });
  }
  render() {
    return `
    <div class="profile__control ${
  !this.props.disabledInputs && "display-none"
}">
      <button class="profile__change-data mb-1rem" id="change-data">
        Изменить данные
      </button>
      <button class="profile__change-data mb-1rem" id="change-password">
        Изменить пароль
      </button>
      <button class="profile__change-data profile__change-data_red">
      <a class="profile__link-to-login" href="../login/index.html">Выйти
      </a>
      </button>
    </div>`;
  }
}
