import { Input } from "../components/input/Input.block";
import { Router } from "../modules/Router/Router";
import { registerComponent } from "../utils/registerComponent";
import { Chats } from "./chats/Chats.block";
import { Login } from "./login/Login.block";
import { Profile } from "./profile/Profile.block";
import { Registration } from "./registration/Registration.block";
import "../pages/login/login.scss";
import "../pages/registration/registration.scss";
import "../pages/chats/chats.scss";
import "../pages/profile/profile.scss";
import "../styles/main.scss";
import { ModalWindowBlock } from "../components/modal-window/ModalWindow.block";
import { ChatCard } from "./chats/components/chat-card/ChatCard.blok";
import { Menu } from "./chats/components/menu/Menu.block";
import { TopButton } from "./chats/components/topButton/TopButton.block";
import { MenuMessages } from "./chats/components/menuMessages/MenuMessages.block";
import { BottomMenu } from "./chats/components/bottomMenu/BottomMenu.block";
import { Card } from "./chats/components/сard/Card.block";
import { store } from "../../store/store";
import { ControlBtnsForm } from "./profile/components/controlsBtnsForm/ControlBtnsForm.block";
import { PasswordForm } from "./profile/components/passwordForm/PasswordForm.block";
import { СonfirmPasswordAndData } from "./profile/components/controlPassword/ControlPassword.block";
import { RegistrationButton } from "./login/components/buttons/regBtn/RegistrationButton.block";
import { AuthButton } from "./login/components/buttons/authBtn/AuthButton.block";

registerComponent(Input);
registerComponent(ModalWindowBlock);
registerComponent(ChatCard);
registerComponent(Menu);
registerComponent(TopButton);
registerComponent(MenuMessages);
registerComponent(BottomMenu);
registerComponent(Card);
registerComponent(ControlBtnsForm);
registerComponent(СonfirmPasswordAndData);
registerComponent(PasswordForm);
registerComponent(RegistrationButton);
registerComponent(AuthButton);

const router = new Router("#root");
router
  .use("/logi", Login, store.login)
  .use("/registration", Registration, store.registration)
  .use("/chats", Chats, store.chats)
  .use("/profile", Profile, store.profile)
  .start();

const toLoginBtn = document.getElementById("to-login");

function toRegistration() {
  router.go("/registration");
}

toLoginBtn?.addEventListener("click", (e: Event) => {
  e.preventDefault();
  router.go("/chats");
  toLoginBtn.style.display = "none";
});
