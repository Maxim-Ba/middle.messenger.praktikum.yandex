import { Block } from "../../modules/Block";
import { render } from "../../utils/renderDOM";
import profileTemplate from "./test.hbs";

class UserProfile extends Block {
  render() {
    return this.compile(profileTemplate, {
      userName: this.props.userName,
      button: this.props.button,
    });
  }
}

const profile = new UserProfile({
  userName: "John Doe",
  button: new Button({ text: "Change name" }),
});

render("#root", profile);
