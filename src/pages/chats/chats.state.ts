import svgDefaultChatPic from "../../../static/img/Chat-picture.svg";
import svgSearch from "../../../static/img/Search.svg";
import svgMenu from "../../../static/img/Menu.svg";
import svgCreateChat from "../../../static/img/Create-chat.svg";
import svgDeleteChat from "../../../static/img/Delete-chat.svg";
import svgChangeChat from "../../../static/img/Change-ava-chat.svg";
import svgAddVideoOrFoto from "../../../static/img/Video-or-foto.svg";
import svgAddFile from "../../../static/img/File.svg";
import svgAddLocation from "../../../static/img/Location.svg";
import svgSendFile from "../../../static/img/Image.svg";
import svgArrowRight from "../../../static/img/Arrow-right.svg";
import { ButtonTextChats, SomeText } from "./text";

export enum EnumChatActions {
  CREATE_CHAT = "create",
  DELETE_CHAT = "delete",
  CHANGE_CHAT_AVA = "change",
  ADD_USER = "addUser",
  DELETE_USER = "deleteUser",
  FOTO_OR_VIDEO = "fotoOrVideo",
  FILE = "file",
  LOCATION = "location",
}

export const chatsState = {
  svgDefault: {
    svgDefaultChatPic,
    svgSearch,
    svgMenu,
    svgSendFile,
    svgArrowRight,
  },
  topMenuButtons: [
    {
      actionTitle: "Создать чат",
      iconSvg: svgCreateChat,
      actionId: EnumChatActions.CREATE_CHAT,
    },
    {
      actionTitle: "Удалить чат",
      iconSvg: svgDeleteChat,
      actionId: EnumChatActions.DELETE_CHAT,
    },
    {
      actionTitle: "Изменить аватар чата",
      iconSvg: svgChangeChat,
      actionId: EnumChatActions.CHANGE_CHAT_AVA,
    },
  ],
  chatsTopMenuButtons: [
    {
      actionTitle: "Добавить пользователя",
      iconSvg: svgCreateChat,
      actionId: EnumChatActions.ADD_USER,
    },
    {
      actionTitle: "Удалить пользователя",
      iconSvg: svgDeleteChat,
      actionId: EnumChatActions.DELETE_USER,
    },
  ],
  bottomMenuButtons: [
    {
      actionTitle: "Фото или видео",
      iconSvg: svgAddVideoOrFoto,
      actionId: EnumChatActions.FOTO_OR_VIDEO,
    },
    {
      actionTitle: "Файл",
      iconSvg: svgAddFile,
      actionId: EnumChatActions.FILE,
    },
    {
      actionTitle: "Локация",
      iconSvg: svgAddLocation,
      actionId: EnumChatActions.LOCATION,
    },
  ],
  chats: [
    {
      name: "Andreyr",
      time: "11:22",
      lastMessage: "aaorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 3,
      isSelected: false,
      chatId: 1,
    },
    {
      name: "Two",
      time: "11:22",
      lastMessage: "aaorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 3,
      isSelected: false,
      chatId: 100,
    },
    {
      name: "Andrey3535",
      time: "11:33",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 4,
      isSelected: false,
      chatId: 4,
    },
    {
      name: "rtyyrtyrty",
      time: "11:44",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 4,
      isSelected: false,
      chatId: 5,
    },
    {
      name: "B",
      time: "11:55",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 25,
      isSelected: false,
      chatId: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: false,
      chatId: 7,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: false,
      chatId: 8,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: false,
      chatId: 9,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: false,
      chatId: 10,
    },
    {
      name: "ADDD",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: false,
      chatId: 11,
    },
    {
      name: "jojo",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: false,
      chatId: 23,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: false,
      chatId: 1,
    },
    {
      name: "Andrey2",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: false,
      chatId: 122,
    },
  ],
  modalWindow: {
    create: false,
    delete: false,
    change: false,
    changeAva: false,
    addUser: false,
    deleteUser: false,
  },
  isOpenWindow: false,
  isOpenMenu: false,
  isOpenSearchField: false,
  isMessagesOpen: false,
  isOpenBottomMenu: false,
  ButtonTextChats,
  SomeText,
};
