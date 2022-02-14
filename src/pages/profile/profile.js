import profileTemplate from "./profile.hbs";
import svgAvatarProfile from "../../../static/img/Avatar-profile.svg";
import svgArrowLeft from "../../../static/img/Arrow.svg";
import { modal } from "../../components/modal-window/modalWindow.partial";
import { ModalWindow } from "../../components/modal-window/modalWindow.main";

const root = document.getElementById("root");
const data = {
  modal,
  svg: {
    svgAvatarProfile,
    svgArrowLeft,
  },
};

root.innerHTML = profileTemplate(data);
const modalWindowEl = document.getElementById("modal-window");
const openModalWindowBtns = root.getElementsByClassName(
  "img_round profile__img",
);

const modalWindow = new ModalWindow(modalWindowEl);
[...openModalWindowBtns].forEach((btn) => {
  modalWindow.bindActionsOnButton(btn, "AVATAR_PROFILE");
});
