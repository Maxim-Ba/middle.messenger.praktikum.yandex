import authController from "../../controllers/AuthController";
import profileController from "../../controllers/ProfileController";
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
          if (
            event.target === this.getContent().querySelector(".profile__img")
          ) {
            profileController.openWindow();
          }
          if (
            event.target === this.getContent().querySelector("#change-data")
          ) {
            profileController.isChangeProfileData();
          }
          if (
            event.target === this.getContent().querySelector("#change-password")
          ) {
            profileController.makePasswordFormVisible();
            profileController.isChangeProfileData();
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
    {{{ToChatsButton
      picArrow=svg.svgArrowLeft
    }}}
      
    </aside>
    <main class="profile">
      <div class="profile__data">
        <img class="img img_round profile__img" src=${
          this.props.avatar
        } alt="Аватар пользователя" />
        <h1 class="profile__owener">{{first_name}} {{second_name}}</h1>
        <div class="profile__form-container">
  
          ${
            !this.props.isPasswordFormVisible
              ? `<form class="profile__form" id="profile">
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="email">{{ButtonTextProfile.EMAIL}}</label>
                <input ${
                  this.props.disabledInputs && "disabled"
                } class="profile__input mb-1rem" type="email" name="email" value={{email}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="login">{{ButtonTextProfile.LOGIN}}</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="login" value={{login}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="first_name">{{ButtonTextProfile.NAME}}</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="first_name" value={{first_name}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="second_name">{{ButtonTextProfile.SECOND_NAME}}</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="second_name" value={{second_name}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="display_name">{{ButtonTextProfile.CHAT_NAME}}</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="display_name" value={{display_name}} />
            </div>
            <div class="profile__field">
              <label class="profile__label mb-1rem" for="phone">{{ButtonTextProfile.PHONE}}</label>
              <input  ${
                this.props.disabledInputs && "disabled"
              } class="profile__input mb-1rem" type="text" name="phone" value="{{phone}}"/>
            </div>
          </form>`
              : " "
          }
          {{{PasswordForm 
            isPasswordFormVisible=isPasswordFormVisible
            ButtonTextProfile=ButtonTextProfile
          }}}
          <div class="login__form-warning">
            <p class="visibility-hidden form-warning form-warning-text" id="form-warning">
            </p>
            <p class="modal-window__warning ${
              this.props.reason ? `` : `display-none`
            }">{{reason}}</p>
          </div>
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
    {{{ModalWindowBlock 
      modalWindow=modalWindow 
      isOpenWindow=isOpenWindow 
      closeWindow=closeWindow
      reason=reason
    }}}
    
  </div>
    `;
  }

  componentDidMount(): void {
    authController.redirect();

    const formEl = this.getContent().querySelector("form");
    const infoEl = this.getContent().querySelector("#form-warning");

    const btnSubmit = this.getContent().querySelector("button[type='submit']");
    if (formEl) {
      this.validator = new FormCheck(
        formEl as HTMLFormElement,
        this.props.isPasswordFormVisible
          ? profileController.changeUserPassword.bind(profileController)
          : profileController.changeUserData.bind(profileController),
        infoEl as HTMLElement,
        btnSubmit as HTMLButtonElement
      );
    }
  }
  componentWillUnmount(): void {
    this.validator?.unistal();
  }
}
