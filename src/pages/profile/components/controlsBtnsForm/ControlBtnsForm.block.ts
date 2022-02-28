import { Block } from "../../../../modules/Block/Block";

export class ControlBtnsForm extends Block<Record<string, any>> {
  constructor(props: Record<string, any> | undefined) {
    super({ ...props });
  }
  static get componentName() {
    return "ControlBtnsForm";
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
