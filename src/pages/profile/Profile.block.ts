import { Block } from "../../modules/Block/Block";
import { FormCheck } from "../../services/formCheck/FormCheck";

export class Profile extends Block<Record<string, any>> {
  validator: FormCheck;
  name: any;
  constructor(props: object | undefined) {
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
            this.props.isChangeProfileData();
          }
        },
      },
    });
  }
  static get componentName() {
    return "Profile";
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
        <h1 class="profile__owener">{{nameOwener}}</h1>
        <div class="profile__form-container">
  
          ${
            !this.props.isPasswordFormVisible
              ? `<form class="profile__form" id="profile">
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="email">{{ButtonTextProfile.EMAIL}}</label>
                <input ${
                  this.props.disabledInputs && "disabled"
                } class="profile__input mb-1rem" type="email" name="email" value={{emailValue}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="login">{{ButtonTextProfile.LOGIN}}</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="login" value={{loginValue}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="first_name">{{ButtonTextProfile.NAME}}</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="first_name" value={{firstNameValue}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="second_name">{{ButtonTextProfile.SECOND_NAME}}</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="second_name" value={{secondNameValue}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="display_name">{{ButtonTextProfile.CHAT_NAME}}</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="display_name" value={{displayNameValue}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="phone">{{ButtonTextProfile.PHONE}}</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="phone" value="{{phoneNameValue}}"/>
            </div>
          </form>`
              : " "
          }
          {{{PasswordForm 
            isPasswordFormVisible=isPasswordFormVisible
            ButtonTextProfile=ButtonTextProfile
          }}}
          <div class="login__form-warning"><p class="visibility-hidden form-warning form-warning-text" id="form-warning"></p></div>
        </div>
  
        <div class="profile__control-wrapper">
          {{{ControlBtnsForm 
            disabledInputs=disabledInputs
            ButtonTextProfile=ButtonTextProfile
          }}}
          {{{СonfirmPasswordAndData
            disabledInputs=disabledInputs 
            isChangeProfileData=isChangeProfileData
            makePasswordFormHidden=makePasswordFormHidden
            isPasswordFormVisible=isPasswordFormVisible
            ButtonTextProfile=ButtonTextProfile
          }}}
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
      this.validator = new FormCheck(
        formEl as HTMLFormElement,
        console.log,
        infoEl as HTMLElement,
        btnSubmit as HTMLButtonElement
      );
    }
  }
  componentWillUnmount(): void {
    this.validator?.unistal();
  }
}
