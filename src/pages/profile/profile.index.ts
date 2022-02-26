import { profileState } from "./profile.state";
import { Profile } from "./Profile.block";
import { render } from "../../utils/renderDOM";
import { ModalWindowBlock } from "../../components/modal-window/ModalWindow.block";
import { registerComponent } from "../../utils/registerComponent";
import { ControlBtnsForm } from "./components/controlsBtnsForm/ControlBtnsForm.block";
import { СonfirmPasswordAndData } from "./components/controlPassword/ControlPassword.block";
import { PasswordForm } from "./components/passwordForm/PasswordForm.block";

registerComponent(ModalWindowBlock);
registerComponent(ControlBtnsForm);
registerComponent(СonfirmPasswordAndData);
registerComponent(PasswordForm);
registerComponent(Profile);

const profile = new Profile({
  ...profileState,
  openWindow() {
    profile.setProps({
      isOpenWindow: !profile.props.isOpenWindow,
      modalWindow: { changeAva: true },
    });
  },
  closeWindow() {
    profile.setProps({
      isOpenWindow: !profile.props.isOpenWindow,
      modalWindow: { changeAva: false },
    });
  },
  isChangeProfileData() {
    profile.setProps({
      disabledInputs: !profile.props.disabledInputs,
    });
  },
  makePasswordFormVisible() {
    profile.setProps({
      isPasswordFormVisible: true,
    });
  },
  makePasswordFormHidden() {
    profile.setProps({
      isPasswordFormVisible: false,
    });
  },
});

render("#root", profile);
