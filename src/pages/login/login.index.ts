import { Input } from "../../components/input/Input.block";
import { render } from "../../utils/renderDOM";
import { Login } from "./Login.block";
import { loginState } from "./login.state";
import { registerComponent } from "../../utils/registerComponent";

registerComponent(Input);
const login = new Login({ ...loginState });

render("#root", login);
