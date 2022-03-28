
import { withStore } from "../../modules/Store/Store";
import { IStore } from "../../modules/Store/StoreTypes";
import { Error404Block } from "./Error404.block";

const withReason = withStore((state: IStore) => ({
  reason: state.reason,
}));

export default withReason(Error404Block);
