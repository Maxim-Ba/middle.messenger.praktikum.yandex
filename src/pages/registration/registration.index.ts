import { render } from "../../utils/renderDOM";
import { Registration } from "./Registration.block";
import { registrationState } from "./registration.state";
import { registerComponent } from "../../utils/registerComponent";
import { Input } from "../../components/input/Input.block";

registerComponent(Input);
const registration = new Registration({ ...registrationState });

render("#root", registration);
