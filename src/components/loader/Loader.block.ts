import { Block } from "../../modules/Block/Block";

export class Loader extends Block<Record<string, any>> {
  static get componentName() {
    return "Loader";
  }
  render() {
    return `
        <div class="loader">
            <p class="loader__title">Загрузка... </p>
            <img src="" class="loader__img">
        </div>
    `;
  }
}
