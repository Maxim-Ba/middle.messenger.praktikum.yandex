import { withStore } from "./../../modules/Store/Store";
import { Profile } from "./Profile.block";
import { ModalWindowBlock } from "../../components/modal-window/ModalWindow.block";
import { registerComponent } from "../../utils/registerComponent";
import { ControlBtnsForm } from "./components/controlsBtnsForm/ControlBtnsForm.block";
import { СonfirmPasswordAndData } from "./components/controlPassword/ControlPassword.block";
import { PasswordForm } from "./components/passwordForm/PasswordForm.block";
import { ToLoginButton } from "./components/toLoginButton/ToLoginButton.block";
import { ToChatsButton } from "./components/toChatsButton/ToChatsButton.block";
import { ButtonClose } from "../../components/modal-window/buttons/ButtonClose.block";
import { IStore } from "../../modules/Store/StoreTypes";

registerComponent(ModalWindowBlock);
registerComponent(ControlBtnsForm);
registerComponent(СonfirmPasswordAndData);
registerComponent(PasswordForm);
registerComponent(ToLoginButton);
registerComponent(ToChatsButton);
registerComponent(ButtonClose);

const withUser = withStore((state: IStore) => ({
  ...state.profileState,
  ...state.currentUser,
  modalWindow: { ...state.modalWindow },
  reason: state.reason,
}));

export default withUser(Profile);
