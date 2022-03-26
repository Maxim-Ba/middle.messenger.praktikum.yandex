import { Registration } from "./Registration.block";
import { registrationState } from "./registration.state";
import { withStore } from "../../modules/Store/Store";
import { IStore } from "../../modules/Store/StoreTypes";

const withReason = withStore((state: IStore) => ({
  ...registrationState,
  reason: state.reason,
}));

export default withReason(Registration);
