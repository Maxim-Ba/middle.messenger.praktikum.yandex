import { ModalWindowBlock } from "../../components/modal-window/ModalWindow.block";
import { Block } from "../../modules/Block";
import { Menu } from "./components/menu/Menu.block";

export class Chats extends Block {
  static getComponentName = "Chats";

  constructor(props) {
    super({ ...props });
  }
  initChildren() {
    this.children.modal = new ModalWindowBlock({
      events: {
        click: (event: Event) => {
          console.log("input click");
        },
      },
    });
    this.children.chatCards = new ModalWindowBlock({
      events: {
        click: (event: Event) => {
          console.log("input click");
        },
      },
    });
    this.children.menu = new Menu({
      onClick: this.props.onClick,
      topMenuButtons: this.props.topMenuButtons as Array<any>,
    });
  }

  render() {
    return `
    <div class="chats__wrapper">
    <aside class="chats__aside">
      <div class="chats__top-btns">
        <button class="button chats__button button_b-r-5px button_blue">
          <a class="chats__link-to-profile" href="../profile/profile.html">
            Профиль</a>
        </button>
        <button
          class="button chats__button button_b-r-5px button_grey"
          id="search"
        >
          <img src={{svgDefault.svgSearch}} alt="Поиск" class="chats__img" />
          Поиск
        </button>
        <div class="chats__search display-none">
          <img
            src={{svgDefault.svgSearch}}
            alt="Поиск"
            class="chats__img absolute"
          />
          <input
            class="chats__search-input button_grey"
            type="text"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div class="chats__list-of-chats">
        {{{chatCards}}}
      </div>
    </aside>
    <main class="chats">
      <header class="chats__header">
        <div class="chats__current-chat">
        </div>
        <img class="chats__menu-btn" src={{svgDefault.svgMenu}} alt="меню" />
      </header>
  
      {{{Menu topMenuButtons=this.children.menu.props.topMenuButtons onClick=onClick}}}
  
      <div class="chats__no-chat-selection">
        <p class="chats__no-chat-selection-p">
          Выберите чат чтобы отправить сообщение
        </p>
      </div>
    </main>
    {{{ModalWindowBlock}}}
  </div>
  
    `;
  }

  componentDidMount() {
    console.log({ ...this.props }, "Chats");
  }
}
