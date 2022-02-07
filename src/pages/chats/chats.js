import Handlebars from "handlebars";
import { modal } from "../../components/modal-window/modalWindow.partial";
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
// const body = document.getElementsByTagName("body");
Handlebars.registerPartial("modalWindow", modal);
// Handlebars.registerHelper("include", function (source) {
//   return new Handlebars.SafeString(source);
// });
console.log(Handlebars);
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
    },
    {
      name: "Andrey",
      time: "11:33",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 3,
    },
    {
      name: "Andrey",
      time: "11:44",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 4,
    },
    {
      name: "Andrey",
      time: "11:55",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: svgDefaultChatPic,
      newMessageCount: 25,
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
// const chatInnerHtml = templateFunction();
root.innerHTML = templateFunction(dataObj);
// let template = Handlebars.compile(chatInnerHtml);
// let html = template(dataObj);
// root.innerHTML = html;

// Handlebars.registerPartial("templ", partial);
// Handlebars.registerPartial("footer", footer);
// Handlebars.registerPartial("header", header);

// var template = Handlebars.compile(partial);
// var context = {
//   content: "<b>Thisdgfdfg is some other content</b>",
//   footer: "footer",
//   header: "header",
// };
// var html = template(context);
// root.append.innerHTML = html
