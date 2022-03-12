import { Input } from "../../components/input/Input.block";
import { render } from "../../utils/renderDOM";
import { Login } from "./Login.block";
import { loginState } from "./login.state";
import { registerComponent } from "../../utils/registerComponent";
import { AuthButton } from "./components/buttons/authBtn/AuthButton.block";
import { RegistrationButton } from "./components/buttons/regBtn/RegistrationButton.block";
registerComponent(RegistrationButton);
registerComponent(AuthButton);
registerComponent(Input);
export const login = new Login({ ...loginState });

// render("#root", login);
