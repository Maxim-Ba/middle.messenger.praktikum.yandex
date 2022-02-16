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
console.log(test, "--test--");

render("#root", test);

// Через секунду контент изменится сам, достаточно обновить пропсы
// setTimeout(() => {
//   test.setProps({
//     className: "otherClass",
//     child: "Click me, please",
//   });
// }, 1000);
