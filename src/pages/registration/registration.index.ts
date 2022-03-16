import { Registration } from "./Registration.block";
import { registrationState } from "./registration.state";
// import { registerComponent } from "../../utils/registerComponent";
// import { Input } from "../../components/input/Input.block";
// import { SendRegistrationButton } from "./components/buttons/regBtn/SendRegistrationButton.block";
// import { ToLoginButtonFromReg } from "./components/buttons/toLogin/AuthButton.block";
import { withStore } from "../../modules/Store/Store";
import { IStore } from "../../modules/Store/StoreTypes";

// registerComponent(Input);
// registerComponent(ToLoginButtonFromReg);
// registerComponent(SendRegistrationButton);
// export const registration = new Registration({ ...registrationState });

const withReason = withStore((state: IStore) => ({
  ...registrationState,
  reason: state.reason,
}));

export default withReason(Registration);
