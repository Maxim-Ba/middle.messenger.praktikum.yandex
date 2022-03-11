export const chatsActions = {
  actionsBtn: {
    create() {
      this.setProps({
        modalWindow: {
          create: true,
          delete: false,
          change: false,
          addUser: false,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !this.props.isOpenMenu,
      });
    },

    delete() {
      this.setProps({
        modalWindow: {
          create: false,
          delete: true,
          change: false,
          addUser: false,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !this.props.isOpenMenu,
      });
    },
    change() {
      this.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: true,
          addUser: false,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !this.props.isOpenMenu,
      });
    },
  },
  actionMessagesBtns: {
    addUser() {
      this.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: false,
          changeAva: false,
          addUser: true,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !this.props.isOpenMenu,
      });
    },
    deleteUser() {
      this.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: false,
          addUser: false,
          deleteUser: true,
        },
        isOpenWindow: true,
        isOpenMenu: !this.props.isOpenMenu,
      });
    },
  },
  closeWindow() {
    this.setProps({
      isOpenWindow: false,
    });
  },
  openMenu() {
    this.setProps({
      isOpenMenu: !this.props.isOpenMenu,
    });
  },
  openSearchField() {
    this.setProps({
      isOpenSearchField: !this.props.isOpenSearchField,
    });
  },
  selectChat(chatId: unknown) {
    console.log(this);

    const newChatsList = this.props.chats.map((chat: { chatId: unknown }) => {
      if (chat.chatId === chatId) {
        return { ...chat, isSelected: true };
      }
      return { ...chat, isSelected: false };
    });
    this.setProps({
      chats: [...newChatsList],
    });
  },
  openMessages() {
    this.setProps({
      isMessagesOpen: true,
    });
  },
  openBottomMenu() {
    this.setProps({
      isOpenBottomMenu: !this.props.isOpenBottomMenu,
    });
  },
  actionsBottomBtn: {
    fotoOrVideo() {
      this.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: true,
          addUser: false,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !this.props.isOpenBottomMenu,
      });
    },

    file() {
      this.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: true,
          addUser: false,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !this.props.isOpenBottomMenu,
      });
    },
    location() {
      this.setProps({
        modalWindow: {
          create: false,
          delete: false,
          change: true,
          addUser: false,
          deleteUser: false,
        },
        isOpenWindow: true,
        isOpenMenu: !this.props.isOpenBottomMenu,
      });
    },
  },
};
