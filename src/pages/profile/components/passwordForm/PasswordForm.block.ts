import { Block } from "../../../../modules/Block";

export class PasswordForm extends Block {
  static getComponentName = "PasswordForm";
  name: string;

  constructor(props: Record<string, any> | undefined) {
    super({ ...props });
    this.name = "PasswordForm";
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
        <label class="profile__label mb-1rem" for="oldPassword">Старый пароль</label>
        <input class="profile__input mb-1rem" type="password" name="oldPassword" />
      </div>
      <div class="profile__field">
        <label class="profile__label mb-1rem" for="newPassword">Новый пароль</label>
        <input class="profile__input mb-1rem" type="password" name="newPassword" />
      </div>
      <div class="profile__field">
        <label class="profile__label" for="password">Повторите пароль</label>
        <input class="profile__input" type="password" name="password" />
      </div>
    </form>
    `
    : " <div></div>"
}
    `;
  }
}
