import { chatsState, EnumChatActions } from "./chats.state";
import { Chats } from "./Chats.block";
import { render } from "../../utils/renderDOM";
import { ModalWindowBlock } from "../../components/modal-window/ModalWindow.block";
import { registerComponent } from "../../utils/registerComponent";
import { Menu } from "./components/menu/Menu.block";
import { ChatCard } from "./components/chat-card/ChatCard.blok";

registerComponent(ModalWindowBlock);
registerComponent(ChatCard);
registerComponent(Menu);
const login = new Chats({
  ...chatsState,
  onClick: () => console.log("its on clickaaaaa"),
});

render("#root", login);
