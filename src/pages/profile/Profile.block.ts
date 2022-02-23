import { Block } from "../../modules/Block";
import { Validator } from "../../modules/Validator";

export class Profile extends Block {
  static getComponentName = "Profile";
  validator: any;
  constructor(props) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          if (event.target === document.querySelector(".profile__img")) {
            this.props.openWindow();
          }
          if (event.target === document.getElementById("change-data")) {
            this.props.isChangeProfileData();
          }
          if (event.target === document.getElementById("change-password")) {
            this.props.makePasswordFormVisible();
          }
        },
      },
    });
    this.validator = {};
  }
  render() {
    return `
    <div class="profile__wrapper">
    <aside class="profile__go-back">
      <a class="profile__link" href="../chats/chats.html">
        <img src={{svg.svgArrowLeft}} alt="Аватар пользователя" class="profile__arrow" />
      </a>
    </aside>
    <main class="profile">
      <div class="profile__data">
        <img class="img img_round profile__img" src={{svg.svgAvatarProfile}} alt="Аватар пользователя" />
        <h1 class="profile__owener">Максим</h1>
        <div class="profile__form-container">
  
          ${
            !this.props.isPasswordFormVisible
              ? `<form class="profile__form" id="profile">
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="email">Почта</label>
                <input ${
                  this.props.disabledInputs && "disabled"
                } class="profile__input mb-1rem" type="email" name="email" value={{emailValue}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="login">Логин</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="login" value={{loginValue}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="first_name">Имя</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="first_name" value={{firstNameValue}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="second_name">Фамилия</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="second_name" value={{secondNameValue}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="display_name">Имя в чате</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="display_name" value={{displayNameValue}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="phone">Телефон</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="phone" value="{{phoneNameValue}}"/>
            </div>
          </form>`
              : ""
          }
          {{{PasswordForm isPasswordFormVisible=isPasswordFormVisible}}}
          <div class="login__form-warning"><p class="visibility-hidden form-warning form-warning-text" id="form-warning"></p></div>
        </div>
  
        <div class="profile__control-wrapper">
          {{{ControlBtnsForm disabledInputs=disabledInputs}}}
          {{{СonfirmPasswordAndData disabledInputs=disabledInputs isChangeProfileData=isChangeProfileData}}}
        </div>
        
    </main>
    {{{ModalWindowBlock modalWindow=modalWindow isOpenWindow=isOpenWindow closeWindow=closeWindow}}}
    
  </div>

  
    `;
  }

  componentDidMount(): void {
    const formEl = document.querySelector("form");
    const infoEl = document.getElementById("form-warning");
    const btnSubmit = document.querySelector("button[type='submit']");
    if (formEl) {
      this.validator = new Validator(
        formEl as HTMLFormElement,
        console.log,
        infoEl as HTMLElement,
        btnSubmit as HTMLButtonElement,
      );
    }
  }
  componentWillUnmount(): void {
    this.validator?.unistal();
  }
}
