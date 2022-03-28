
import { withStore } from "../../modules/Store/Store";
import { IStore } from "../../modules/Store/StoreTypes";
import { Error500Block } from "./Error500.block";

const withReason = withStore((state: IStore) => ({
  reason: state.reason,
}));

export default withReason(Error500Block);
