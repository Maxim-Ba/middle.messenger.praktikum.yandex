import { ButtonTextChats, SomeText } from "./../../pages/chats/text";
import { EventBus } from "../../utils/EventBus";
import { isEqual } from "../../utils/isEqual";
import { set } from "../../utils/set";
import { Block } from "../Block/Block";
import { EnumChatActions, IStore } from "./StoreTypes";
import svgDefaultChatPic from "../../../static/img/Chat-picture.svg";
import svgSearch from "../../../static/img/Search.svg";
import svgMenu from "../../../static/img/Menu.svg";
import svgCreateChat from "../../../static/img/Create-chat.svg";
import svgDeleteChat from "../../../static/img/Delete-chat.svg";
import svgChangeChat from "../../../static/img/Change-ava-chat.svg";
import svgAddVideoOrFoto from "../../../static/img/Video-or-foto.svg";
import svgAddFile from "../../../static/img/File.svg";
import svgAddLocation from "../../../static/img/Location.svg";
import svgSendFile from "../../../static/img/Image.svg";
import svgArrowRight from "../../../static/img/Arrow-right.svg";
import svgArrowLeft from "../../../static/img/Arrow.svg";

enum StoreEvents {
  UPDATED = "UPDATED",
}

class Store extends EventBus {
  private state: IStore = {
    chats: [],
    chatsState: {
      svgDefault: {
        svgDefaultChatPic,
        svgSearch,
        svgMenu,
        svgSendFile,
        svgArrowRight,
        svgArrowLeft,
      },
      topMenuButtons: [
        {
          actionTitle: "Создать чат",
          iconSvg: svgCreateChat,
          actionId: EnumChatActions.CREATE_CHAT,
        },

        {
          actionTitle: "Изменить аватар чата",
          iconSvg: svgChangeChat,
          actionId: EnumChatActions.CHANGE_CHAT_AVA,
        },
      ],
      chatsTopMenuButtons: [
        {
          actionTitle: "Добавить пользователя",
          iconSvg: svgCreateChat,
          actionId: EnumChatActions.ADD_USER,
        },
        {
          actionTitle: "Удалить пользователя",
          iconSvg: svgDeleteChat,
          actionId: EnumChatActions.DELETE_USER,
        },
        {
          actionTitle: "Удалить чат",
          iconSvg: svgDeleteChat,
          actionId: EnumChatActions.DELETE_CHAT,
        },
      ],
      bottomMenuButtons: [
        {
          actionTitle: "Фото или видео",
          iconSvg: svgAddVideoOrFoto,
          actionId: EnumChatActions.FOTO_OR_VIDEO,
        },
        {
          actionTitle: "Файл",
          iconSvg: svgAddFile,
          actionId: EnumChatActions.FILE,
        },
        {
          actionTitle: "Локация",
          iconSvg: svgAddLocation,
          actionId: EnumChatActions.LOCATION,
        },
      ],
      isOpenWindow: false,
      isOpenMenu: false,
      isOpenSearchField: false,
      isMessagesOpen: false,
      isOpenBottomMenu: false,
      resultSearchChat: [],
      isResultSearchChat: false,
      ButtonTextChats,
      SomeText,
    },
    modalWindow: {
      create: false,
      delete: false,
      change: false,
      changeAva: false,
      addUser: false,
      deleteUser: false,

      location: false,
      file: false,
      fotoOrVideo: false,
    },
  };

  public getState() {
    return this.state;
  }
  public set(path: keyof IStore, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.UPDATED);
  }
}
const store = new Store();

export const withStore =
  (mapStateToProps: (state: IStore) => any) => (Component: typeof Block) => {
    let state: Record<string, any>;
    return class extends Component<any> {
      constructor(props: Record<string, any>) {
        state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.UPDATED, () => {
          const newState = mapStateToProps(store.getState());
          if (!isEqual(state, newState)) {
          }
          this.setProps({ ...newState });
        });
      }
    };
  };

export default store;
