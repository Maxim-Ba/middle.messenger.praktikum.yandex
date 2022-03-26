import { Input } from "../../components/input/Input.block";
import { Login } from "./Login.block";
import { loginState } from "./login.state";
import { registerComponent } from "../../utils/registerComponent";
import { AuthButton } from "./components/buttons/authBtn/AuthButton.block";
import { RegistrationButton } from "./components/buttons/regBtn/RegistrationButton.block";
import { withStore } from "../../modules/Store/Store";
import { IStore } from "../../modules/Store/StoreTypes";
registerComponent(RegistrationButton);
registerComponent(AuthButton);
registerComponent(Input);

const withReason = withStore((state: IStore) => ({
  ...loginState,
  reason: state.reason,
}));

export default withReason(Login);
