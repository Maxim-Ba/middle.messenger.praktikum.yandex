import { Block } from "../../../../modules/Block";

export class СonfirmPasswordAndData extends Block {
  static getComponentName = "СonfirmPasswordAndData";

  constructor(props) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          if (event.target === document.querySelector(".button_grey")) {
            this.props.isChangeProfileData();
            this.props.makePasswordFormHidden();
          }
          if (event.target === document.querySelector(".button_blue")) {
            // this.props.isChangeProfileData();
            // this.props.makePasswordFormHidden();
          }
        },
      },
    });
  }
  render() {
    return `
      <div class="profile__control profile__control_row ${
        this.props.disabledInputs ? "display-none" : ""
      }">
          <button
            class="profile__btn button button_b-r-8px button_grey button_auth"
          >
            Отмена
          </button>
          <button
            class="profile__btn button button_b-r-8px button_blue button_auth"
            type="submit"
            form="${
              this.props.isPasswordFormVisible ? "profile-password" : "profile"
            }"
          >
            Сохранить
          </button>
      </div>
    `;
  }
  componentDidMount() {}
}
