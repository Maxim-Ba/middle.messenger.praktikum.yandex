import { chatsState } from "./chats.state";
import { Chats } from "./Chats.block";
// import { ModalWindowBlock } from "../../components/modal-window/ModalWindow.block";
// import { registerComponent } from "../../utils/registerComponent";
// import { Menu } from "./components/menu/Menu.block";
// import { ChatCard } from "./components/chat-card/ChatCard.blok";
// import { TopButton } from "./components/topButton/TopButton.block";
// import { MenuMessages } from "./components/menuMessages/MenuMessages.block";
// import { BottomMenu } from "./components/bottomMenu/BottomMenu.block";
// import { Card } from "./components/сard/Card.block";
// import { ToProfileButton } from "./components/buttons/ToProfileButton";
// import { BackToChatListBtn } from "./components/backToChatListBtn/backToChatListBtn.block";
// import { ButtonClose } from "../../components/modal-window/buttons/ButtonClose.block";
import { withStore } from "../../modules/Store/Store";
import { IStore } from "../../modules/Store/StoreTypes";

// registerComponent(ModalWindowBlock);
// registerComponent(ChatCard);
// registerComponent(Menu);
// registerComponent(TopButton);
// registerComponent(MenuMessages);
// registerComponent(BottomMenu);
// registerComponent(Card);
// registerComponent(ToProfileButton);
// registerComponent(BackToChatListBtn);
// registerComponent(ButtonClose);

// export const chats = new Chats({
//   ...chatsState,
//   actionsBtn: {
//     create() {
//       chats.setProps({
//         modalWindow: {
//           create: true,
//           delete: false,
//           change: false,
//           addUser: false,
//           deleteUser: false,
//           location: false,
//           file: false,
//           fotoOrVideo: false,
//         },
//         isOpenWindow: true,
//         isOpenMenu: !chats.props.isOpenMenu,
//       });
//     },

//     delete() {
//       chats.setProps({
//         modalWindow: {
//           create: false,
//           delete: true,
//           change: false,
//           addUser: false,
//           deleteUser: false,
//           location: false,
//           file: false,
//           fotoOrVideo: false,
//         },
//         isOpenWindow: true,
//         isOpenMenu: !chats.props.isOpenMenu,
//       });
//     },
//     change() {
//       chats.setProps({
//         modalWindow: {
//           create: false,
//           delete: false,
//           change: true,
//           addUser: false,
//           deleteUser: false,
//         },
//         isOpenWindow: true,
//         isOpenMenu: !chats.props.isOpenMenu,
//       });
//     },
//   },
//   actionMessagesBtns: {
//     addUser() {
//       chats.setProps({
//         modalWindow: {
//           create: false,
//           delete: false,
//           change: false,
//           changeAva: false,
//           addUser: true,
//           deleteUser: false,
//           location: false,
//           file: false,
//           fotoOrVideo: false,
//         },
//         isOpenWindow: true,
//         isOpenMenu: !chats.props.isOpenMenu,
//       });
//     },
//     deleteUser() {
//       chats.setProps({
//         modalWindow: {
//           create: false,
//           delete: false,
//           change: false,
//           addUser: false,
//           deleteUser: true,
//           location: false,
//           file: false,
//           fotoOrVideo: false,
//         },
//         isOpenWindow: true,
//         isOpenMenu: !chats.props.isOpenMenu,
//       });
//     },
//   },
//   closeWindow() {
//     chats.setProps({
//       isOpenWindow: false,
//     });
//   },
//   openMenu() {
//     chats.setProps({
//       isOpenMenu: !chats.props.isOpenMenu,
//     });
//   },
//   openSearchField() {
//     chats.setProps({
//       isResultSearchChat: !chats.props.isResultSearchChat,
//       isOpenSearchField: !chats.props.isOpenSearchField,
//     });
//   },
//   selectChat(chatId: unknown) {
//     const newChatsList = chats.props.chats.map((chat: { chatId: unknown }) => {
//       if (chat.chatId === chatId) {
//         return { ...chat, isSelected: true };
//       }
//       return { ...chat, isSelected: false };
//     });
//     chats.setProps({
//       chats: [...newChatsList],
//     });
//   },
//   openMessages() {
//     chats.setProps({
//       isMessagesOpen: true,
//     });
//   },
//   closeMessages() {
//     chats.setProps({
//       isMessagesOpen: false,
//     });
//   },
//   openBottomMenu() {
//     chats.setProps({
//       isOpenBottomMenu: !chats.props.isOpenBottomMenu,
//     });
//   },
//   actionsBottomBtn: {
//     fotoOrVideo() {
//       chats.setProps({
//         modalWindow: {
//           create: false,
//           delete: false,
//           change: false,
//           addUser: false,
//           deleteUser: false,
//           location: false,
//           file: false,
//           fotoOrVideo: true,
//         },
//         isOpenWindow: true,
//         isOpenBottomMenu: !chats.props.isOpenBottomMenu,
//       });
//     },

//     file() {
//       chats.setProps({
//         modalWindow: {
//           create: false,
//           delete: false,
//           change: false,
//           addUser: false,
//           deleteUser: false,
//           location: false,
//           file: true,
//           fotoOrVideo: false,
//         },
//         isOpenWindow: true,
//         isOpenBottomMenu: !chats.props.isOpenBottomMenu,
//       });
//     },
//     location() {
//       chats.setProps({
//         modalWindow: {
//           create: false,
//           delete: false,
//           change: false,
//           addUser: false,
//           deleteUser: false,
//           location: true,
//           file: false,
//           fotoOrVideo: false,
//         },
//         isOpenWindow: true,
//         isOpenBottomMenu: !chats.props.isOpenBottomMenu,
//       });
//     },
//   },
//   closeCurrentChat() {
//     const newChatsList = chats.props.chats.map((chat: any) => {
//       return { ...chat, isSelected: false };
//     });
//     chats.setProps({
//       chats: [...newChatsList],
//       isOpenMenu: false,
//       isOpenBottomMenu: false,
//     });
//   },
//   searchChat(value: string) {
//     const newChatsList = chats.props.chats.map((chat: any) => {
//       if (chat.name.match(new RegExp(`${value}`, "gi"))) {
//         return chat;
//       }
//     });
//     chats.setProps({
//       isResultSearchChat: true,
//       resultSearchChat: [...newChatsList],
//     });
//   },
// });

const withChats = withStore((state: IStore) => ({
  ...state.chatsState,
  chats: state.chats,
  modalWindow: state.modalWindow,
  reason: state.reason,
}));

export default withChats(Chats);
