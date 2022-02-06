console.log("profile is load");
import profileTemplate from "./profile.hbs";
import svgAvatarProfile from "../../../static/img/Avatar-profile.svg";
import svgArrowLeft from "../../../static/img/Arrow.svg";
const root = document.getElementById("root");
const data = {
  svg: {
    svgAvatarProfile,
    svgArrowLeft,
  },
};

root.innerHTML = profileTemplate(data);
