import { Router } from "../modules/Router/Router";
import "../pages/login/login.scss";
import "../pages/registration/registration.scss";
import "../pages/chats/chats.scss";
import "../pages/profile/profile.scss";
import "../styles/main.scss";
import { login } from "./login/login.index";
import { chats } from "./chats/chats.index";
import { registration } from "./registration/registration.index";
import { profile } from "./profile/profile.index";
const router = new Router("#root");
router
  .use("/", login)
  .use("/sign-up", registration)
  .use("/messenger", chats)
  .use("/settings", profile)
  .start();
