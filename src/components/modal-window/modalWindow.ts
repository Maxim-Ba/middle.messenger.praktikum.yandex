import { ModalWindowBlock } from "./ModalWindow.block";

export const modalWindow = new ModalWindowBlock({
  events: {
    click: (event: Event) => {
      const modal = document.querySelector("#modal-window");
      const modalWrapper = document.getElementById("modal-window__wrapper");
      if (event.target === modalWrapper) {
        modal?.classList.add("display-none");
      }
    },
  },
});
