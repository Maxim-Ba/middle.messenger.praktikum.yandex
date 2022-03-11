import { chatsActions } from "../src/pages/chats/chats.actions";
import { chatsState } from "../src/pages/chats/chats.state";
import { loginState } from "../src/pages/login/login.state";
import { profileActions } from "../src/pages/profile/profile.actions";
import { profileState } from "../src/pages/profile/profile.state";
import { registrationState } from "../src/pages/registration/registration.state";

export const store = {
  login: loginState,
  registration: registrationState,
  chats: { ...chatsState, ...chatsActions },
  profile: { ...profileState, ...profileActions },
};
