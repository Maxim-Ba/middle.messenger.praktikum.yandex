import { Block } from "../../../../modules/Block";
import template from "./menu.hbs";

export class Menu extends Block {
  static getComponentName = "Menu";
  constructor({ topMenuButtons, onClick }) {
    super({
      topMenuButtons,
      events: {
        click: onClick,
      },
    });
  }
  render() {
    return `
    <menu class="chats__menu">
    <div class="chats__menu-content display-none" id="chats">
      {{#each topMenuButtons}}
        <div class="chats__menue-item" id={{actionId}}>
          <img src={{iconSvg}} alt="#" class="chats__menue-item-img" />
          <p class="chats__menue-item-action">{{actionTitle}}</p>
        </div>
      {{/each}}
    </div>
  </menu>
  
  `;
  }
  componentDidMount(): void {}
}
