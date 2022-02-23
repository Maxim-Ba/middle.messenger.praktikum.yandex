import { chatsState } from "./chats.state";
import { Chats } from "./Chats.block";
import { render } from "../../utils/renderDOM";
import { ModalWindowBlock } from "../../components/modal-window/ModalWindow.block";
import { registerComponent } from "../../utils/registerComponent";
import { Menu } from "./components/menu/Menu.block";
import { ChatCard } from "./components/chat-card/ChatCard.blok";
import { TopButton } from "./components/topButton/TopButton.block";

registerComponent(ModalWindowBlock);
registerComponent(ChatCard);
registerComponent(Menu);
registerComponent(TopButton);
const chats = new Chats({
  ...chatsState,
  actionsBtn: {
    create() {
      chats.setProps({
        modalWindow: {
          create: true,
          delete: false,
          change: false,
        },
        isOpenWindow: true,
        isOpenMenu: !chats.props.isOpenMenu,
      });
    },

    delete() {
      chats.setProps({
        modalWindow: {
          create: false,
          delete: true,
          change: false,
        },
        isOpenWindow: true,
        isOpenMenu: !chats.props.isOpenMenu,
      });
    },
    change() {
      chats.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: true,
        },
        isOpenWindow: true,
        isOpenMenu: !chats.props.isOpenMenu,
      });
    },
  },
  closeWindow() {
    chats.setProps({
      isOpenWindow: false,
    });
  },
  openMenu() {
    chats.setProps({
      isOpenMenu: !chats.props.isOpenMenu,
    });
  },
  openSearchField() {
    chats.setProps({
      isOpenSearchField: !chats.props.isOpenSearchField,
    });
  },
});

render("#root", chats);
