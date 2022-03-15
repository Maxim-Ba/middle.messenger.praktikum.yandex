import { Router } from "../modules/Router/Router";
import "../pages/login/login.scss";
import "../pages/registration/registration.scss";
import "../pages/chats/chats.scss";
import "../pages/profile/profile.scss";
import "../styles/main.scss";
import { Login } from "./login/Login.block";
import { Registration } from "./registration/Registration.block";
import { Chats } from "./chats/Chats.block";
import { Profile } from "./profile/Profile.block";
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

const router = new Router();
router
  .use("/", Login)
  .use("/sign-up", Registration)
  .use("/messenger", Chats)
  .use("/settings", Profile)
  .start();
