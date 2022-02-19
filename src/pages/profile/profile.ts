import { profileState } from "./profile.state";
import { Profile } from "./Profile.block";
import { modalWindow } from "../../components/modal-window/modalWindow";
import { render } from "../../utils/renderDOM";
import { passwordForm } from "./components/passwordForm/passwordForm";
import { controlsBtnsForm } from "./components/controlsBtnsForm/controlsBtnsForm";
import { controlPassword } from "./components/controlPassword/controlPassword";

const profile = new Profile({
  ...profileState,
  events: {
    click: (event: Event) => {
      const modal = document.querySelector("#modal-window");
      const openModalWindowBtn = document.getElementsByClassName("img_round profile__img") || [];
      switch (event.target) {
        case openModalWindowBtn[0]: //[0]
          modal?.classList.remove("display-none");
          break;
        default:
          break;
      }
    },
  },
  modal: modalWindow,
  passwordForm,
  controlsBtnsForm,
  controlPassword
});

render("#root", profile);
