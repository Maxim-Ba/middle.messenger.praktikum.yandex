import { Block } from "../../modules/Block/Block";
import { chatsState } from "./chats.state";

export function chatsActions(block: Block<any>) {
  return {
    ...chatsState,
    actionsBtn: {
      create() {
        block.setProps({
          modalWindow: {
            create: true,
            delete: false,
            change: false,
            addUser: false,
            deleteUser: false,
          },
          isOpenWindow: true,
          isOpenMenu: !block.props.isOpenMenu,
        });
      },

      delete() {
        block.setProps({
          modalWindow: {
            create: false,
            delete: true,
            change: false,
            addUser: false,
            deleteUser: false,
          },
          isOpenWindow: true,
          isOpenMenu: !block.props.isOpenMenu,
        });
      },
      change() {
        block.setProps({
          modalWindow: {
            create: false,
            delete: false,
            change: true,
            addUser: false,
            deleteUser: false,
          },
          isOpenWindow: true,
          isOpenMenu: !block.props.isOpenMenu,
        });
      },
    },
    actionMessagesBtns: {
      addUser() {
        block.setProps({
          modalWindow: {
            create: false,
            delete: false,
            change: false,
            changeAva: false,
            addUser: true,
            deleteUser: false,
          },
          isOpenWindow: true,
          isOpenMenu: !block.props.isOpenMenu,
        });
      },
      deleteUser() {
        block.setProps({
          modalWindow: {
            create: false,
            delete: false,
            change: false,
            addUser: false,
            deleteUser: true,
          },
          isOpenWindow: true,
          isOpenMenu: !block.props.isOpenMenu,
        });
      },
    },
    closeWindow() {
      block.setProps({
        isOpenWindow: false,
      });
    },
    openMenu() {
      block.setProps({
        isOpenMenu: !block.props.isOpenMenu,
      });
    },
    openSearchField() {
      block.setProps({
        isOpenSearchField: !block.props.isOpenSearchField,
      });
    },
    selectChat(chatId: unknown) {
      console.log(block);

      const newChatsList = block.props.chats.map(
        (chat: { chatId: unknown }) => {
          if (chat.chatId === chatId) {
            return { ...chat, isSelected: true };
          }
          return { ...chat, isSelected: false };
        }
      );
      block.setProps({
        chats: [...newChatsList],
      });
    },
    openMessages() {
      block.setProps({
        isMessagesOpen: true,
      });
    },
    openBottomMenu() {
      block.setProps({
        isOpenBottomMenu: !block.props.isOpenBottomMenu,
      });
    },
    actionsBottomBtn: {
      fotoOrVideo() {
        block.setProps({
          modalWindow: {
            create: false,
            delete: false,
            change: true,
            addUser: false,
            deleteUser: false,
          },
          isOpenWindow: true,
          isOpenMenu: !block.props.isOpenBottomMenu,
        });
      },

      file() {
        block.setProps({
          modalWindow: {
            create: false,
            delete: false,
            change: true,
            addUser: false,
            deleteUser: false,
          },
          isOpenWindow: true,
          isOpenMenu: !block.props.isOpenBottomMenu,
        });
      },
      location() {
        block.setProps({
          modalWindow: {
            create: false,
            delete: false,
            change: true,
            addUser: false,
            deleteUser: false,
          },
          isOpenWindow: true,
          isOpenMenu: !block.props.isOpenBottomMenu,
        });
      },
    },
  };
}
