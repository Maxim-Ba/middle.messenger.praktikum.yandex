import { Block } from "../../../../modules/Block/Block";
interface Iprops {
  disabledInputs: boolean;
}
export class ControlBtnsForm extends Block<Iprops> {
  constructor(props: Iprops) {
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
      <button class="profile__change-data mb-1rem" id="change-data" type="button"
      >
      {{ButtonTextProfile.CHANGE_DATA}}
      </button>
      <button class="profile__change-data mb-1rem" id="change-password" type="button"
      >
        {{ButtonTextProfile.CHANGE_PASWORD}}
      </button>
      {{{ToLoginButton
        buttonText=ButtonTextProfile.LOGOUT
      }}}
      
    </div>`;
  }
}
