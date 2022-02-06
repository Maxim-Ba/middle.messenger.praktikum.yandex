console.log("login is load");
import Handlebars from "handlebars";
import loginTemplate from "./login.hbs";

const root = document.getElementById("root");
root.innerHTML = loginTemplate();
