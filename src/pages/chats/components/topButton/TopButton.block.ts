import { Block } from "../../../../modules/Block/Block";
interface TopButtonPropsI {
  svgDefault: Record<string, any>;
  openMenu: Record<string, any>;
}
export class TopButton extends Block<TopButtonPropsI> {
  static get componentName() {
    return "TopButton";
  }
  constructor({ svgDefault, openMenu }: TopButtonPropsI) {
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
}
