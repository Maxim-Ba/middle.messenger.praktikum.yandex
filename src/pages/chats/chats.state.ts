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

export enum EnumChatActions {
  CREATE_CHAT = "create-chat",
  DELETE_CHAT = "delete-chat",
  CHANGE_CHAT_AVA = "change-chat-ava",
  ADD_USER = "add-user",
  DELETE_USER = "delete-user",
  FOTO_OR_VIDEO = "foto-or-video",
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
      name: "Andrey",
      time: "11:22",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 3,
      isSelected: true,
    },
    {
      name: "Andrey",
      time: "11:33",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 3,
      isSelected: true,
    },
    {
      name: "Andrey",
      time: "11:44",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 4,
      isSelected: true,
    },
    {
      name: "Andrey",
      time: "11:55",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 25,
      isSelected: true,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: true,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: true,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
      isSelected: true,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 6,
    },
  ],
};
