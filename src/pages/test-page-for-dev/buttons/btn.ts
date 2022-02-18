import { Btn } from "./Btn.block";
import svgCreateChat from "../../../../static/img/Create-chat.svg";
export const btn = new Btn({
  events: {
    click: (event: Event) => {
      const modal = document.querySelector("#modal-window");
      modal?.classList.toggle("display-none");
    },
  },
  svgDefault: { svgCreateChat },
});
