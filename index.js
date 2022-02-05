console.log("worked");
import Handlebars from "handlebars";
import { partial, footer, header } from "./partial";

const root = document.getElementById("root");
Handlebars.registerPartial("templ", partial);
Handlebars.registerPartial("footer", footer);
Handlebars.registerPartial("header", header);

var template = Handlebars.compile(partial);
var context = {
  content: "<b>Thisdgfdfg is some other content</b>",
  footer: "footer",
  header: "header",
};
var html = template(context);
root.innerHTML = html;
