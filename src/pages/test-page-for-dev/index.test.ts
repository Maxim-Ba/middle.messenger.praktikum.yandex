import { dataObj } from "./test";
import { Test } from "./components-test/Test";
import { render } from "../../utils/renderDOM";
import { modalWindow } from "../../components/modal-window/modalWindow";
import { btn } from "./buttons/btn";

const test = new Test({
  ...dataObj,
  events: {
    click: (event) => {
      console.log(event);
    },
  },
  modal: modalWindow,
  btn,
});

render("#root", test);
