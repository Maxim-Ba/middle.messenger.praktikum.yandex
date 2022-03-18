import authController from "../../controllers/AuthController";
import chatsController from "../../controllers/ChatsController";
import { Block } from "../../modules/Block/Block";
import { IChatsStore } from "../../modules/Store/StoreTypes";
import { FormCheck } from "../../services/formCheck/FormCheck";

export class Chats extends Block<object> {
  validator: FormCheck;

  constructor(props: Record<string, any> | undefined) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          if (event.target === document.getElementById("search")) {
            chatsController.openSearchField();
          }
          if (event.target === document.querySelector(".chats__file-menu")) {
            chatsController.openBottomMenu();
          }
        },
        input: (event: Event) => {
          if (event.target === document.querySelector("#search-input")) {
            chatsController.searchChat(
              (event.target as HTMLInputElement).value
            );
          }
        },
      },
    });
    this.getSelectedChat = this.getSelectedChat.bind(this);
  }
  static get componentName() {
    return "Chats";
  }
  getSelectedChat() {
    const selectChat = this.props.chats.filter(
      (chat: IChatsStore) => chat.isSelected
    );
    if (!selectChat.length) {
      console.log(selectChat);
      //rerender TODO
      return { avatar: "", title: "" };
    }
    return selectChat[0];
  }

  render() {
    return `
    <div class="chats__wrapper">
    <aside class="chats__aside">
      <div class="chats__top-btns">
      {{{ToProfileButton
        buttonText=ButtonTextChats.PROFILE
      }}}
        <button
          class="button chats__button button_b-r-5px button_grey"
          id="search"
        >
          <img src={{svgDefault.svgSearch}} alt="Поиск" class="chats__img" />
          {{ButtonTextChats.SEARCH}}
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
            id="search-input"
          />
        </div>
      </div>
        {{{ChatCard
          chats=chats
          selectChat=selectChat
          openMessages=openMessages
        }}}
    </aside>
    <main class="chats">
      <header class="chats__header">
        <div class="chats__current-chat">
          ${
            this.props.isMessagesOpen
              ? `
                {{{BackToChatListBtn
                  svgDefault=svgDefault
                }}}
                <img
                  class="chats__current-chat-pic"
                  src=${this.getSelectedChat().avatar}
                  alt="картинка выбраного чата"
                />
                <p class="chats__current-chat-name">${
                  this.getSelectedChat().title
                }</p>`
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
            {{SomeText.CHOOSE_CHAT}}
          </p>
        </div>`
          : `<section class="chats__body">
          <div class="chats__messages">
            
            {{{BottomMenu
              isOpenBottomMenu=isOpenBottomMenu
              bottomMenuButtons=bottomMenuButtons
              actionsBottomBtn=actionsBottomBtn
            }}}

            {{{MessagesBlock messages=messages}}}


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
    {{{ModalWindowBlock 
      modalWindow=modalWindow 
      isOpenWindow=isOpenWindow 
      closeWindow=closeWindow
      reason=reason
    }}}
  </div>
  
    `;
  }

  componentDidMount(): void {
    authController.redirect();
    const formEl = document.querySelector("#chats__send-msg-form");

    const infoEl = document.getElementById("form-warning");

    const btnSubmit = document.querySelector(".chats__send-btn");
    if (formEl) {
      this.validator = new FormCheck(
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
