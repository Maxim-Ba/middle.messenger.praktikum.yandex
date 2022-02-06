console.log("loaded");
import Handlebars from "handlebars";
import { ModalWindow } from "../../components/modal-window/modalWindow.partial";
import { Chat } from "./chat";
import templateFunction from "./chats.hbs";
// const string = document.getElementById("templ").innerHTML;

const root = document.getElementById("root");

Handlebars.registerPartial("modalWindow", ModalWindow);
// const template = Handlebars.compile(string);
Handlebars.registerHelper("include", function (source) {
  return new Handlebars.SafeString(source);
});
const dataObj = {
  chats: [
    {
      name: "Andrey",
      time: "11:22",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "./src/static/img/Chat-picture.svg",
      newMessageCount: 3,
    },
    {
      name: "Andrey",
      time: "11:33",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "./Chat-picture.svg",
      newMessageCount: 3,
    },
    {
      name: "Andrey",
      time: "11:44",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "../../static/img/Chat-picture.svg",
      newMessageCount: 4,
    },
    {
      name: "Andrey",
      time: "11:55",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "../../static/img/Chat-picture.svg",
      newMessageCount: 25,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "../../static/img/Chat-picture.svg",
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "../../static/img/Chat-picture.svg",
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "../../static/img/Chat-picture.svg",
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "../../static/img/Chat-picture.svg",
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "../../static/img/Chat-picture.svg",
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "../../static/img/Chat-picture.svg",
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "../../static/img/Chat-picture.svg",
      newMessageCount: 6,
    },
    {
      name: "Andrey",
      time: "11:00",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageSrc: "../../static/img/Chat-picture.svg",
      newMessageCount: 6,
    },
  ],
};
const chats = [
  {
    name: "Andrey",
    time: "11:22",
    lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageSrc: "../../static/img/Chat-picture.svg",
    newMessageCount: 2,
  },
  {
    name: "Andrey",
    time: "11:33",
    lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageSrc: "../../static/img/Chat-picture.svg",
    newMessageCount: 3,
  },
  {
    name: "Andrey",
    time: "11:44",
    lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageSrc: "../../static/img/Chat-picture.svg",
    newMessageCount: 4,
  },
  {
    name: "Andrey",
    time: "11:55",
    lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageSrc: "../../static/img/Chat-picture.svg",
    newMessageCount: 25,
  },
  {
    name: "Andrey",
    time: "11:00",
    lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageSrc: "../../static/img/Chat-picture.svg",
    newMessageCount: 6,
  },
];
document.body.innerHTML = templateFunction(dataObj);

const html = template(dataObj);
root.innerHTML = html;

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
