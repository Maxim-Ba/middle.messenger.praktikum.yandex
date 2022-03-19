import { WebSockeAPI } from "./../../services/API/WebSoketAPI";
import { ButtonTextProfile } from "../../pages/profile/text";
import { SomeText, ButtonTextChats } from "./../../pages/chats/text";
export interface IStore {
  currentUser?: IUserStore;
  reason?: string | null;
  chats: IChatsStore[];
  chatsState: IChatViewState;
  modalWindow: IModalWindow;
  chatUsers?: IChatUsers[];
  profileState: IProfileState;
  token?: string;
  webSocket?: WebSockeAPI;
  messages: IMessagesState[];
}

export interface IUserStore {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface IChatsStore {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  isSelected: boolean;

  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  };
}

export interface IChatViewState {
  svgDefault: {
    svgDefaultChatPic: string;
    svgSearch: string;
    svgMenu: string;
    svgSendFile: string;
    svgArrowRight: string;
    svgArrowLeft: string;
  };
  topMenuButtons: IMenuButton[];
  chatsTopMenuButtons: IMenuButton[];
  bottomMenuButtons: IMenuButton[];
  isOpenWindow: boolean;
  isOpenMenu: boolean;
  isOpenSearchField: boolean;
  isMessagesOpen: boolean;
  isOpenBottomMenu: boolean;
  resultSearchChat: [];
  isResultSearchChat: boolean;
  ButtonTextChats: typeof ButtonTextChats;
  SomeText: typeof SomeText;
}

export enum EnumChatActions {
  CREATE_CHAT = "create",
  DELETE_CHAT = "delete",
  CHANGE_CHAT_AVA = "change",
  ADD_USER = "addUser",
  DELETE_USER = "deleteUser",
  FOTO_OR_VIDEO = "fotoOrVideo",
  FILE = "file",
  LOCATION = "location",
}
interface IMenuButton {
  actionTitle: string;
  iconSvg: string;
  actionId: EnumChatActions;
}
interface IModalWindow {
  create: boolean;
  delete: boolean;
  change: boolean;
  changeAva: boolean;
  addUser: boolean;
  deleteUser: boolean;
  location: boolean;
  file: boolean;
  fotoOrVideo: boolean;
}
export interface IChatUsers {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
  role: string;
}
export interface IProfileState {
  disabledInputs: true;
  svg: {
    svgAvatarProfile: string;
    svgArrowLeft: string;
  };
  isOpenWindow: boolean;
  isPasswordFormVisible: boolean;
  ButtonTextProfile: typeof ButtonTextProfile;
}
export interface IMessagesState {
  chat_id: number;
  time: string;
  type: string;
  user_id: string;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}
