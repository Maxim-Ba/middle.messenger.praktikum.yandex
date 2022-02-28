import { Block } from "../../modules/Block/Block";
import { Validator } from "../../services/validator/Validator";

export class Chats extends Block<object> {
  validator: Validator;

  constructor(props: Record<string, any> | undefined) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          if (event.target === document.getElementById("search")) {
            this.props.openSearchField();
          }
          if (event.target?.tagName === "CARD") {
            this.props.selectChat(Number(event.target.id));
            this.props.openMessages();
          }
          if (event.target?.parentNode?.tagName === "CARD") {
            this.props.selectChat(Number(event.target.parentNode.id));
            this.props.openMessages();
          }
          if (event.target?.parentNode?.parentNode?.tagName === "CARD") {
            this.props.selectChat(
              Number(event.target.parentNode?.parentNode?.id)
            );
            this.props.openMessages();
          }
          if (event.target === document.querySelector(".chats__file-menu")) {
            this.props.openBottomMenu();
          }
        },
      },
    });
  }
  static get componentName() {
    return "Chats";
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
          ${
            this.props.isMessagesOpen
              ? `<img
                class="chats__current-chat-pic"
                src={{svgDefault.svgDefaultChatPic}}
                alt="картинка выбраного чата"
                />
                <p class="chats__current-chat-name">Андрей</p>`
              : "<div></div>"
          }
        </div>
        {{{TopButton openMenu=openMenu svgDefault=svgDefault }}}
      </header>
      ${
        !this.props.isMessagesOpen
          ? `
        {{{Menu 
          topMenuButtons=topMenuButtons 
          onClick=onClick 
          actionsBtn = actionsBtn
          isOpenMenu=isOpenMenu
        }}}
        `
          : `
        {{{MenuMessages 
          onClick=onClick 
          actionMessagesBtns = actionMessagesBtns
          isOpenMenu=isOpenMenu
          chatsTopMenuButtons=chatsTopMenuButtons
        }}}
        `
      }
      
      ${
        !this.props.isMessagesOpen
          ? `<div class="chats__no-chat-selection">
          <p class="chats__no-chat-selection-p">
            Выберите чат чтобы отправить сообщение
          </p>
        </div>`
          : `<section class="chats__body">
          <div class="chats__messages">
            {{{BottomMenu
              isOpenBottomMenu=isOpenBottomMenu
              bottomMenuButtons=bottomMenuButtons
              actionsBottomBtn=actionsBottomBtn
            }}}
            {{{message}}}
          </div>
          <form class="chats__footer" id="chats__send-msg-form">
          <div class="display-none" id="form-warning"></div>
            <img
              class="chats__file-menu"
              src={{svgDefault.svgSendFile}}
              alt="Прикрепить
        файл"
            />
            <input
              name="message"
              class="chats__input"
              type="text"
              placeholder="Сообщение"
            />
            <button class="chats__send-btn">
              <img
                class="chats__send"
                src={{svgDefault.svgArrowRight}}
                alt="Прикрепить файл"
              />
            </button>
          </form>
        </section>`
      }
      
    </main>
    {{{ModalWindowBlock modalWindow=modalWindow isOpenWindow=isOpenWindow closeWindow=closeWindow}}}
  </div>
  
    `;
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    return true;
  }
  componentDidMount(): void {
    const formEl = document.querySelector("#chats__send-msg-form");

    const infoEl = document.getElementById("form-warning");

    const btnSubmit = document.querySelector(".chats__send-btn");
    if (formEl) {
      this.validator = new Validator(
        formEl as HTMLFormElement,
        console.log,
        infoEl as HTMLElement,
        btnSubmit as HTMLButtonElement
      );
    }
  }
  componentWillUnmount(): void {
    if (this.validator) {
      this.validator?.unistal();
    }
  }
}
