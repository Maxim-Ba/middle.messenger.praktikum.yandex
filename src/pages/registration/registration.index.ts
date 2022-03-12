import { Registration } from "./Registration.block";
import { registrationState } from "./registration.state";
import { registerComponent } from "../../utils/registerComponent";
import { Input } from "../../components/input/Input.block";
import { ToLoginButton } from "./components/buttons/toLogin/AuthButton.block";
import { SendRegistrationButton } from "./components/buttons/regBtn/SendRegistrationButton.block";

registerComponent(Input);
registerComponent(ToLoginButton);
registerComponent(SendRegistrationButton);
export const registration = new Registration({ ...registrationState });
