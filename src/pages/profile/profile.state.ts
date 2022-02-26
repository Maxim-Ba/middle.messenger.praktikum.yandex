import svgAvatarProfile from "../../../static/img/Avatar-profile.svg";
import svgArrowLeft from "../../../static/img/Arrow.svg";

export const profileState = {
  disabledInputs: true,
  svg: {
    svgAvatarProfile,
    svgArrowLeft,
  },
  emailValue: "max@max.ru",
  loginValue: "maxmax",
  firstNameValue: "NAME",
  secondNameValue: "SECOND",
  displayNameValue: "superMax",
  phoneNameValue: "+71234567890",
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
};
