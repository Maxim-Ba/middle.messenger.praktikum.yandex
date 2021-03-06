import router from "../modules/Router/Router";
import "../pages/login/login.scss";
import "../pages/registration/registration.scss";
import "../pages/chats/chats.scss";
import "../pages/profile/profile.scss";
import "../styles/main.scss";
import "../styles/modalWindow.scss";
import "../pages/error-page-404/error-page.scss";
import "../components/loader/loader.scss";

import LoginWithStore from "./login/login.index";
import RegistrationWithStore from "./registration/registration.index";
import ChatsWithStore from "./chats/chats.index";
import ProfileWithStore from "./profile/profile.index";
import { RegistrationButton } from "./login/components/buttons/regBtn/RegistrationButton.block";
import { AuthButton } from "./login/components/buttons/authBtn/AuthButton.block";
import { Input } from "../components/input/Input.block";
import { ToLoginButtonFromReg } from "./registration/components/buttons/toLogin/AuthButton.block";
import { SendRegistrationButton } from "./registration/components/buttons/regBtn/SendRegistrationButton.block";
import { registerComponent } from "../utils/registerComponent";
import { ModalWindowBlock } from "../components/modal-window/ModalWindow.block";
import { ChatCard } from "./chats/components/chat-card/ChatCard.blok";
import { Menu } from "./chats/components/menu/Menu.block";
import { ButtonClose } from "../components/modal-window/buttons/ButtonClose.block";
import { TopButton } from "./chats/components/topButton/TopButton.block";
import { BottomMenu } from "./chats/components/bottomMenu/BottomMenu.block";
import { MenuMessages } from "./chats/components/menuMessages/MenuMessages.block";
import { ToProfileButton } from "./chats/components/buttons/ToProfileButton";
import { Card } from "./chats/components/сard/Card.block";
import { BackToChatListBtn } from "./chats/components/backToChatListBtn/backToChatListBtn.block";
import { ControlBtnsForm } from "./profile/components/controlsBtnsForm/ControlBtnsForm.block";
import { PasswordForm } from "./profile/components/passwordForm/PasswordForm.block";
import { ToLoginButton } from "./profile/components/toLoginButton/ToLoginButton.block";
import { ToChatsButton } from "./profile/components/toChatsButton/ToChatsButton.block";
import { СonfirmPasswordAndData } from "./profile/components/controlPassword/ControlPassword.block";
import AuthController from "../controllers/AuthController";
import { MessagesBlock } from "./chats/components/messages/Messages.block";
import { SingleMessage } from "./chats/components/singleMessage/SingleMessage.block";
import { ToChatsButtonError } from "../components/toChatsButton/ToChatsButtonError.block";
import Error500Block from "./error-page-500/500.index";
import Error404Block from "./error-page-404/404.index";
import { Loader } from "../components/loader/Loader.block";

registerComponent(MessagesBlock);
registerComponent(RegistrationButton);
registerComponent(AuthButton);
registerComponent(Input);
registerComponent(ToLoginButtonFromReg);
registerComponent(SendRegistrationButton);
registerComponent(ModalWindowBlock);
registerComponent(ChatCard);
registerComponent(Menu);
registerComponent(TopButton);
registerComponent(MenuMessages);
registerComponent(BottomMenu);
registerComponent(Card);
registerComponent(ToProfileButton);
registerComponent(BackToChatListBtn);
registerComponent(ControlBtnsForm);
registerComponent(СonfirmPasswordAndData);
registerComponent(PasswordForm);
registerComponent(ToLoginButton);
registerComponent(ToChatsButton);
registerComponent(ButtonClose);
registerComponent(SingleMessage);
registerComponent(ToChatsButtonError);
registerComponent(Loader);

router
  .use("/", LoginWithStore)
  .use("/sign-up", RegistrationWithStore)
  .use("/messenger", ChatsWithStore)
  .use("/settings", ProfileWithStore)
  .use("/500", Error500Block)
  .useError404("/404", Error404Block)
  .start();

async function fetch() {
  try {
    await AuthController.fetchUser();
  } catch (error) {
    console.log(error);
  }
}

fetch();
