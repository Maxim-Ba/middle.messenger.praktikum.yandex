import { render } from "../../utils/renderDOM";
import { Login } from "./Login.block";
import { loginState } from "./login.state";
import { input } from "../../components/input/input";

const login = new Login({
  events: {
    click: (event: Event) => {
      console.log(123);
    },
  },
  ...loginState,
  input,
});

render("#root", login);
