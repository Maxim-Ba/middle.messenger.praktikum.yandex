console.log("login is load");
import loginTemplate from "./login.hbs";

const root = document.getElementById("root");
if (root) {
  root.innerHTML = loginTemplate();
}
