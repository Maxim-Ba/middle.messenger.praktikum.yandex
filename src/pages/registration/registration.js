console.log("profile is load");
import registrationTemplate from "./registration.hbs";

const root = document.getElementById("root");
root.innerHTML = registrationTemplate();
