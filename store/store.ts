import { chatsActions } from "../src/pages/chats/chats.actions";
import { chatsState } from "../src/pages/chats/chats.state";
import { loginState } from "../src/pages/login/login.state";
import { profileState } from "../src/pages/profile/profile.state";
import { registrationState } from "../src/pages/registration/registration.state";

export const store = {
  login: loginState,
  registration: registrationState,
  chats: chatsState,
  profile: profileState,
};
