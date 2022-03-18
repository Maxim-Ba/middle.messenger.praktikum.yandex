import { Chats } from "./Chats.block";

import { withStore } from "../../modules/Store/Store";
import { IStore } from "../../modules/Store/StoreTypes";

const withChats = withStore((state: IStore) => ({
  ...state.chatsState,
  chats: state.chats,
  modalWindow: state.modalWindow,
  reason: state.reason,
}));

export default withChats(Chats);
