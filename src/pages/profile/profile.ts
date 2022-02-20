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
      const openModalWindowBtn =
        document.getElementsByClassName("img_round profile__img") || [];
      const form = modal?.querySelector("#modal-window-upload-pic-profile");
      modal?.querySelectorAll(".modal-window__container").forEach((node) => {
        node.classList.add("display-none");
      });
      form?.classList.remove("display-none");
      const changeDataBtns = document.querySelectorAll(".profile__change-data");

      switch (event.target) {
        case openModalWindowBtn[0]: //[0]
          modal?.classList.remove("display-none");
          break;
        case changeDataBtns[0]:
          profile.changeDisabledInput();
          console.log(profile.props, "profile.props");

          break;
        case changeDataBtns[1]:
          // const dataForm = document.querySelector("#profile");
          console.log(changeDataBtns[1]);
          break;
        case changeDataBtns[2]:
          console.log(changeDataBtns[2]);
          break;
        default:
          break;
      }
    },
  },
  modal: modalWindow,
  passwordForm,
  controlsBtnsForm,
  controlPassword,
});

render("#root", profile);
