import { Block } from "../../modules/Block";

export class Chats extends Block {
  static getComponentName = "Chats";

  constructor(props) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          if (event.target === document.getElementById("search")) {
            this.props.openSearchField();
          }
        },
      },
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
        <div class="chats__search ${
          this.props.isOpenSearchField ? "" : "display-none"
        } ">
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
        {{{ChatCard chats=chats}}}
    </aside>
    <main class="chats">
      <header class="chats__header">
        <div class="chats__current-chat">
        </div>
        {{{TopButton openMenu=openMenu svgDefault=svgDefault }}}
      </header>
  
      {{{Menu 
        topMenuButtons=topMenuButtons 
        onClick=onClick 
        actionsBtn = actionsBtn
        isOpenMenu=isOpenMenu
      }}}
  
      <div class="chats__no-chat-selection">
        <p class="chats__no-chat-selection-p">
          Выберите чат чтобы отправить сообщение
        </p>
      </div>
    </main>
    {{{ModalWindowBlock modalWindow=modalWindow isOpenWindow=isOpenWindow closeWindow=closeWindow}}}
  </div>
  
    `;
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    return true;
  }
}
