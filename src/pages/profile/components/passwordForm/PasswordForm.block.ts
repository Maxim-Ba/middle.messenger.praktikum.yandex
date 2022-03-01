import { Block } from "../../../../modules/Block/Block";

export class PasswordForm extends Block<Record<string, any>> {
  name: string;

  constructor(props: Record<string, any> | undefined) {
    super({ ...props });
  }
  static get componentName() {
    return "PasswordForm";
  }
  render() {
    return `
    ${
      this.props.isPasswordFormVisible
        ? `
    <form
      class="profile__form profile__form-password"
      id="profile-password"
    >
      <div class="profile__field">
        <label class="profile__label mb-1rem" for="oldPassword">{{ButtonTextProfile.OLD_PASSWORD}}</label>
        <input class="profile__input mb-1rem" type="password" name="oldPassword" />
      </div>
      <div class="profile__field">
        <label class="profile__label mb-1rem" for="newPassword">{{ButtonTextProfile.NEW_PASSWORD}}</label>
        <input class="profile__input mb-1rem" type="password" name="newPassword" />
      </div>
      <div class="profile__field">
        <label class="profile__label" for="password">{{ButtonTextProfile.REAPET_PASSWORD}}</label>
        <input class="profile__input" type="password" name="password" />
      </div>
    </form>
    `
        : " <div></div>"
    }
    `;
  }
}
