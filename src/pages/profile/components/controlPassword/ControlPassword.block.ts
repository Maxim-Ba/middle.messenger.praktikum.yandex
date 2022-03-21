import profileController from "../../../../controllers/ProfileController";
import { Block } from "../../../../modules/Block/Block";
interface Iprops {
  disabledInputs: boolean;
  isPasswordFormVisible: boolean;
}
export class СonfirmPasswordAndData extends Block<Iprops> {
  constructor(props: Iprops) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          if (
            event.target === this.getContent().querySelector(".button_grey")
          ) {
            profileController.isChangeProfileData();
            profileController.makePasswordFormHidden();
          }
        },
      },
    });
  }
  static get componentName() {
    return "СonfirmPasswordAndData";
  }
  render() {
    return `
      <div class="profile__control profile__control_row ${
        this.props.disabledInputs ? "display-none" : ""
      }">
          <button
            type="button"
            class="profile__btn button button_b-r-8px button_grey button_auth"
          >
          {{ButtonTextProfile.CANCEL}}
          </button>
          <button
            class="profile__btn button button_b-r-8px button_blue button_auth"
            type="submit"
            form="${
              this.props.isPasswordFormVisible ? "profile-password" : "profile"
            }"
          >
            {{ButtonTextProfile.SAVE}}
          </button>
      </div>
    `;
  }
}
