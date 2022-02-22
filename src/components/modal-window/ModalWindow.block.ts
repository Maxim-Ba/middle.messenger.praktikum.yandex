import { Block } from "../../modules/Block";
import template from "./modalWindow.hbs";

export class ModalWindowBlock extends Block {
  static getComponentName = "ModalWindowBlock";

  render() {
    return `
    <section class="modal-window display-none" id="modal-window">
  <div id="modal-window__wrapper" class="modal-window__wrapper"></div>
  <div
    class="modal-window__container display-none"
    id="modal-window-create-chat"
  >
    <p class="modal-window__title">Создать чат</p>
    <form class="modal-window__form" id="modal-window-form-create-chat">
      <label class="modal-window__label" for="chat-name">Название чата</label>
      <input
        class="modal-window__text-input"
        type="text"
        name="chat-name"
        placeholder="Название"
      />
      <div class="modal-window__btns">
        <button
          class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_grey"
        >
          Отмена
        </button>
        <button
          class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_blue"
        >
          Создать чат
        </button>
      </div>
      <p class="modal-window__warning">
        Чат с таким именем уже есть
      </p>
    </form>
  </div>
  <div
    class="modal-window__container display-none"
    id="modal-window-delete-chat"
  >
    <p class="modal-window__title">Удалить чат</p>
    <form class="modal-window__form" id="modal-window-form-delete-chat">
      <label class="modal-window__label" for="chat-name">Название чата</label>
      <input
        class="modal-window__text-input"
        type="text"
        name="chat-name"
        placeholder="Название"
      />
      <div class="modal-window__btns">
        <button
          class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_grey"
        >
          Отмена
        </button>
        <button
          class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_blue"
        >
          Удалить чат
        </button>
      </div>
      <p class="modal-window__warning">
        Чата с таким именем нет
      </p>
    </form>
  </div>
  <div class="modal-window__container" id="modal-window-upload-pic-profile">
    <p class="modal-window__title">Загрузите файл</p>
    <form class="modal-window__form" id="modal-window-form-pic-profile">
      <label
        class="modal-window__label_f-loaded"
        for="file"
        style="display: none;"
      >pic.jpg</label>
      <label class="modal-window__label_file-input" for="avatar">Выбрать файл на
        компьютере</label>
      <input
        class="modal-window__file-input"
        type="file"
        name="avatar"
        id="avatar"
      />
      <div class="modal-window__btns">
        <button
          class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
        >
          Поменять
        </button>
      </div>
      <p class="modal-window__warning">
        Нужно выбрать файл
      </p>
    </form>
  </div>
  <div
    class="modal-window__container display-none"
    id="modal-window-upload-pic-chat"
  >
    <p class="modal-window__title">Изменить аватар чата</p>
    <form class="modal-window__form" id="modal-window-form-pic-chat">
      <label
        class="modal-window__label_f-loaded"
        for="file"
        style="display: none;"
      >pic.jpg</label>
      <label class="modal-window__label_file-input" for="file">Выбрать файл на
        компьютере</label>
      <input
        class="modal-window__file-input"
        type="file"
        name="chat-name"
        id="file"
      />
      <div class="modal-window__btns">
        <button
          class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
        >
          Поменять
        </button>
      </div>
      <p class="modal-window__warning">
        Нужно выбрать файл
      </p>
    </form>
  </div>
  <div class="modal-window__container display-none" id="modal-window-add-user">
    <p class="modal-window__title">Добавить пользователя</p>
    <form class="modal-window__form" id="modal-window-form-add-user">
      <label class="modal-window__label" for="chat-name">Логин пользователя</label>
      <input
        class="modal-window__text-input"
        type="text"
        name="chat-name"
        placeholder="Логин пользователя"
      />
      <div class="modal-window__btns">
        <button
          class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
        >
          Добавить
        </button>
      </div>
      <p class="modal-window__warning">
        Пользователя с таким логином нет
      </p>
    </form>
  </div>
  <div
    class="modal-window__container display-none"
    id="modal-window-delete-user"
  >
    <p class="modal-window__title">Удалить пользователя</p>
    <form class="modal-window__form" id="modal-window-form-delete-user">
      <label class="modal-window__label" for="chat-name">Логин пользователя</label>
      <input
        class="modal-window__text-input"
        type="text"
        name="chat-name"
        placeholder="Логин пользователя"
      />
      <div class="modal-window__btns">
        <button
          class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_grey"
        >
          Отмена
        </button>
        <button
          class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_blue"
        >
          Удалить
        </button>
      </div>
      <p class="modal-window__warning">
        Пользователя с таким логином нет
      </p>
    </form>
  </div>
</section>
    `;
  }
}
