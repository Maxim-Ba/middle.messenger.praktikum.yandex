import * as Handlebars from "handlebars";
import { modal } from "../../components/modal-window/modalWindow.partial";
import { ModalWindow } from "../../components/modal-window/modalWindow.main";
import templateFunction from "./chats.hbs";
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

const root = document.getElementById("root");
Handlebars.registerPartial("modalWindow", modal);

const dataObj = {
  modal,
  svgDefault: {
    svgDefaultChatPic,
    svgSearch,
    svgMenu,
    svgCreateChat,
    svgDeleteChat,
    svgChangeChat,
    svgAddVideoOrFoto,
    svgAddFile,
    svgAddLocation,
    svgSendFile,
    svgArrowRight,
  },
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
if (root) {
  root.innerHTML = templateFunction(dataObj);
}

const modalWindowEl = document.getElementById("modal-window");
const openModalWindowBtns =
  root?.getElementsByClassName("chats__menue-item") || [];

const modalWindowInstance = new ModalWindow(modalWindowEl);
[...openModalWindowBtns].forEach((btn) => {
  modalWindowInstance.bindActionsOnButton(btn, null);
});
