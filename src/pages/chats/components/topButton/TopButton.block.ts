import { Block } from "../../../../modules/Block";

export class TopButton extends Block {
  static getComponentName = "TopButton";

  constructor({ svgDefault, openMenu }) {
    super({
      svgDefault,
      events: {
        click: openMenu,
      },
    });
  }
  render() {
    return `
      <img class="chats__menu-btn" src={{svgDefault.svgMenu}} alt="меню" />
    `;
  }
  componentDidMount(): void {}
}
