console.log("profile is load");
import registrationTemplate from "./registration.hbs";
const root: HTMLElement | null = document.getElementById("root");
if (root) {
  root.innerHTML = registrationTemplate();
}
