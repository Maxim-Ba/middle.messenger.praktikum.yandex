import svgAvatarProfile from "../../../static/img/Avatar-profile.svg";
import svgArrowLeft from "../../../static/img/Arrow.svg";
import { ButtonTextProfile } from "./text";

export const profileState = {
  disabledInputs: true,
  svg: {
    svgAvatarProfile,
    svgArrowLeft,
  },
  modalWindow: {
    create: false,
    delete: false,
    change: false,
    changeAva: false,
    addUser: false,
    deleteUser: false,
  },
  isOpenWindow: false,
  isPasswordFormVisible: false,
  ButtonTextProfile,
};
