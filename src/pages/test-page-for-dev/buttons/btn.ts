import { Btn } from "./Btn.block";
import svgCreateChat from "../../../../static/img/Create-chat.svg";
export const btn = new Btn({
  events: {
    click: (event) => {
      const modal = document.querySelector("#modal-window");
      console.log(modal);

      modal?.classList.toggle("display-none");
    },
  },
  svgDefault: { svgCreateChat },
});
