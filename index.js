console.log("loaded");
import Handlebars from "handlebars";
import { ModalWindow } from "./src/components/modal-window/modalWindow.partial";
import { Chat } from "./src/pages/chats/chat";
const root = document.getElementById("root");

Handlebars.registerPartial("modalWindow", ModalWindow);
const template = Handlebars.compile(Chat);
const html = template("");
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
// root.append.innerHTML = html;
