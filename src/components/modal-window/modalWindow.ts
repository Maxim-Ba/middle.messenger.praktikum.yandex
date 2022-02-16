import { ModalWindowBlock } from "./ModalWindow.block";
import { render } from "../../utils/renderDOM";

export const modalWindow = new ModalWindowBlock({
  events: {
    click: (event) => {
      event.target.classList.toggle("display-none");
    },
  },
});
