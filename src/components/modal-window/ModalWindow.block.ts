import { Block } from "../../modules/Block/Block";
interface Props {
  isOpenWindow: boolean;
  closeWindow: () => void;
  modalWindow: Record<string, any>;
}

export class ModalWindowBlock extends Block<Record<string, any>> {
  constructor({ isOpenWindow, closeWindow, modalWindow }: Props) {
    super({
      closeWindow,
      isOpenWindow,
      modalWindow,
      events: {
        click: (event: Event) => {
          if (
            event.target === document.getElementById("modal-window__wrapper")
          ) {
            this.props.closeWindow();
          }
        },
        submit: (event: Event) => {
          event.preventDefault();
          switch (event.target) {
            case document.getElementById("modal-window-form-create-chat"):
              console.log("modal-window-create-chat");
              break;
            case document.getElementById("modal-window-form-delete-chat"):
              console.log("modal-window-create-chat");
              break;
            case document.getElementById("modal-window-form-pic-profile"):
              console.log("modal-window-create-chat");
              break;
            case document.getElementById("modal-window-form-pic-chat"):
              console.log("modal-window-create-chat");
              break;
            case document.getElementById("modal-window-form-add-user"):
              console.log("modal-window-create-chat");
              break;
            case document.getElementById("modal-window-form-delete-user"):
              console.log("modal-window-create-chat");
              break;
            case document.getElementById("modal-window-form-send-location"):
              console.log("modal-window-create-chat");
              break;
            case document.getElementById("modal-window-form-file"):
              console.log("modal-window-create-chat");
              break;
            case document.getElementById("modal-window-form-foto-or-video"):
              console.log("modal-window-create-chat");
              break;
            default:
              break;
          }
        },
      },
    });
  }
  static get componentName() {
    return "ModalWindowBlock";
  }
  render() {
    return `
    <section class="modal-window ${
      this.props.isOpenWindow ? "" : "display-none"
    } " 
      id="modal-window">
      <div id="modal-window__wrapper" class="modal-window__wrapper"></div>
      <div
        class="modal-window__container ${
          this.props.modalWindow.create ? "" : "display-none"
        }"
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
            id="chat-name"
          />
          <div class="modal-window__btns">
            {{{ButtonClose}}}
            <button
              class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_blue"
              type="submit"
            >
              Создать чат
            </button>
          </div>
          <p class="modal-window__warning display-none" >
            Чат с таким именем уже есть
          </p>
        </form>
      </div>
      <div
        class="modal-window__container ${
          this.props.modalWindow.delete ? "" : "display-none"
        }"
        id="modal-window-delete-chat"
      >
        <p class="modal-window__title">Удалить чат</p>
        <form class="modal-window__form" id="modal-window-form-delete-chat">
          <label class="modal-window__label" for="delete-chat">Название чата</label>
          <input
            class="modal-window__text-input"
            type="text"
            name="delete-chat"
            id="delete-chat"
            placeholder="Название"
          />
          <div class="modal-window__btns">
            {{{ButtonClose}}}
            <button
              class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_blue"
            >
              Удалить чат
            </button>
          </div>
          <p class="modal-window__warning display-none">
            Чата с таким именем нет
          </p>
        </form>
      </div>
      <div class="modal-window__container ${
        this.props.modalWindow.changeAva ? "" : "display-none"
      }" id="modal-window-upload-pic-profile">
        <p class="modal-window__title">Загрузите файл</p>
        <form class="modal-window__form" id="modal-window-form-pic-profile">
          <label
            class="modal-window__label_f-loaded"
            for="pic-profile"
            style="display: none;"
          >pic.jpg</label>
          <label class="modal-window__label_file-input" for="pic-profile">Выбрать файл на
            компьютере</label>
          <input
            class="modal-window__file-input"
            type="file"
            name="pic-profile"
            id="pic-profile"
          />
          <div class="modal-window__btns">
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
            >
              Поменять
            </button>
          </div>
          <p class="modal-window__warning display-none">
            Нужно выбрать файл
          </p>
        </form>
      </div>
      <div
        class="modal-window__container ${
          this.props.modalWindow.change ? "" : "display-none"
        }"
        id="modal-window-upload-pic-chat"
      >
        <p class="modal-window__title">Изменить аватар чата</p>
        <form class="modal-window__form" id="modal-window-form-pic-chat">
          <label
            class="modal-window__label_f-loaded"
            for="pic-chat"
            style="display: none;"
          >pic.jpg</label>
          <label class="modal-window__label_file-input" for="upload-pic-chat">Выбрать файл на
            компьютере</label>
          <input
            class="modal-window__file-input"
            type="file"
            name="upload-pic-chat"
            id="pic-chat"
          />
          <div class="modal-window__btns">
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
            >
              Поменять
            </button>
          </div>
          <p class="modal-window__warning display-none">
            Нужно выбрать файл
          </p>
        </form>
      </div>
      <div class="modal-window__container ${
        this.props.modalWindow.addUser ? "" : "display-none"
      }" id="modal-window-add-user">
        <p class="modal-window__title">Добавить пользователя</p>
        <form class="modal-window__form" id="modal-window-form-add-user">
          <label class="modal-window__label" for="add-user">Логин пользователя</label>
          <input
            class="modal-window__text-input"
            type="text"
            name="add-user"
            id="add-user"
            placeholder="Логин пользователя"
          />
          <div class="modal-window__btns">
          
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
            >
              Добавить
            </button>
          </div>
          <p class="modal-window__warning display-none">
            Пользователя с таким логином нет
          </p>
        </form>
      </div>
      <div
        class="modal-window__container ${
          this.props.modalWindow.deleteUser ? "" : "display-none"
        }"
        id="modal-window-delete-user"
      >
        <p class="modal-window__title">Удалить пользователя</p>
        <form class="modal-window__form" id="modal-window-form-delete-user">
          <label class="modal-window__label" for="delete-user">Логин пользователя</label>
          <input
            class="modal-window__text-input"
            type="text"
            name="delete-user"
            placeholder="Логин пользователя"
            id="delete-user"
          />
          <div class="modal-window__btns">
            
            {{{ButtonClose}}}
            <button
              class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_blue"
            >
              Удалить
            </button>
          </div>
          <p class="modal-window__warning display-none">
            Пользователя с таким логином нет
          </p>
        </form>
      </div>

      <div
        class="modal-window__container ${
          this.props.modalWindow.location ? "" : "display-none"
        }"
        id="modal-window-send-location"
      >
        <p class="modal-window__title">Прикрепить локацию</p>
        <form class="modal-window__form" id="modal-window-form-send-location">
          <label
            class="modal-window__label_f-loaded"
            for="location"
            style="display: none;"
          >pic.jpg</label>
          <label class="modal-window__label_file-input" for="location">Прикрепить локацию</label>
          <input
            class="modal-window__file-input"
            type="file"
            name="location"
            id="location"
          />
          <div class="modal-window__btns">
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
            >
              Локация
            </button>
          </div>
          <p class="modal-window__warning display-none">
            Нужно выбрать файл
          </p>
        </form>
      </div>
      <div
        class="modal-window__container ${
          this.props.modalWindow.file ? "" : "display-none"
        }"
        id="modal-window-file"
      >
        <p class="modal-window__title">Прикрепить файл</p>
        <form class="modal-window__form" id="modal-window-form-file">
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
            name="file"
            id="file"
          />
          <div class="modal-window__btns">
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
            >
              Файл
            </button>
          </div>
          <p class="modal-window__warning display-none">
            Нужно выбрать файл
          </p>
        </form>
      </div>
      <div
        class="modal-window__container ${
          this.props.modalWindow.fotoOrVideo ? "" : "display-none"
        }"
        id="modal-window-foto-or-video"
      >
        <p class="modal-window__title">Прикрепить фото или видео</p>
        <form class="modal-window__form" id="modal-window-form-foto-or-video">
          <label
            class="modal-window__label_f-loaded"
            for="foto-or-video"
            style="display: none;"
          >pic.jpg</label>
          <label class="modal-window__label_file-input" for="foto-or-video">Выбрать файл на
            компьютере</label>
          <input
            class="modal-window__file-input"
            type="file"
            name="foto-or-video"
            id="foto-or-video"
          />
          <div class="modal-window__btns">
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
            >
              Выбрать файл
            </button>
          </div>
          <p class="modal-window__warning display-none">
            Нужно выбрать файл
          </p>
        </form>
      </div>
    </section>
    `;
  }

  componentDidUpdate(): boolean {
    return true;
  }
}
