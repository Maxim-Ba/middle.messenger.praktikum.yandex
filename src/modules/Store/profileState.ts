import svgAvatarProfile from "../../../static/img/Avatar-profile.svg";
import svgArrowLeft from "../../../static/img/Arrow.svg";
import {ButtonTextProfile} from "../../pages/profile/text";
import { IProfileState } from "./StoreTypes";

export const profileState:IProfileState = {
  disabledInputs: true,
  svg: {
    svgAvatarProfile,
    svgArrowLeft,
  },
   
  isOpenWindow: false,
  isPasswordFormVisible: false,
  ButtonTextProfile,
};
