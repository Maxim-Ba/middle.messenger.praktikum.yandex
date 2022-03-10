import { chatsState } from "./chats.state";
import { Chats } from "./Chats.block";
import { render } from "../../utils/renderDOM";
import { ModalWindowBlock } from "../../components/modal-window/ModalWindow.block";
import { registerComponent } from "../../utils/registerComponent";
import { Menu } from "./components/menu/Menu.block";
import { ChatCard } from "./components/chat-card/ChatCard.blok";
import { TopButton } from "./components/topButton/TopButton.block";
import { MenuMessages } from "./components/menuMessages/MenuMessages.block";
import { BottomMenu } from "./components/bottomMenu/BottomMenu.block";
import { Card } from "./components/сard/Card.block";

registerComponent(ModalWindowBlock);
registerComponent(ChatCard);
registerComponent(Menu);
registerComponent(TopButton);
registerComponent(MenuMessages);
registerComponent(BottomMenu);
registerComponent(Card);
const chats = new Chats({
  ...chatsState,
  actionsBtn: {
    create() {
      chats.setProps({
        modalWindow: {
          create: true,
          delete: false,
          change: false,
          addUser: false,
          deleteUser: false,
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
          addUser: false,
          deleteUser: false,
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
          addUser: false,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !chats.props.isOpenMenu,
      });
    },
  },
  actionMessagesBtns: {
    addUser() {
      chats.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: false,
          changeAva: false,
          addUser: true,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !chats.props.isOpenMenu,
      });
    },
    deleteUser() {
      chats.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: false,
          addUser: false,
          deleteUser: true,
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
  selectChat(chatId: unknown) {
    const newChatsList = chats.props.chats.map((chat: { chatId: unknown }) => {
      if (chat.chatId === chatId) {
        return { ...chat, isSelected: true };
      }
      return { ...chat, isSelected: false };
    });
    chats.setProps({
      chats: [...newChatsList],
    });
  },
  openMessages() {
    chats.setProps({
      isMessagesOpen: true,
    });
  },
  openBottomMenu() {
    chats.setProps({
      isOpenBottomMenu: !chats.props.isOpenBottomMenu,
    });
  },
  actionsBottomBtn: {
    fotoOrVideo() {
      chats.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: true,
          addUser: false,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !chats.props.isOpenBottomMenu,
      });
    },

    file() {
      chats.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: true,
          addUser: false,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !chats.props.isOpenBottomMenu,
      });
    },
    location() {
      chats.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: true,
          addUser: false,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !chats.props.isOpenBottomMenu,
      });
    },
  },
});

render("#root", chats);
