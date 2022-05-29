import { Login } from "./Login.block";
import { loginState } from "./login.state";
import { withStore } from "../../modules/Store/Store";
import { IStore } from "../../modules/Store/StoreTypes";


const withReason = withStore((state: IStore) => ({
  ...loginState,
  reason: state.reason,
  isLoading: state.isLoading,
}));

export default withReason(Login);
