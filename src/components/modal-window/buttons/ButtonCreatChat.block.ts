import { Block } from "../../../modules/Block/Block";


export class ButtonCreatChat extends Block<Record<string, any>> {
  constructor(props:Record<string, any>) {
    super({
      ...props,
      events: {
        click: () => {
            console.log('ButtonCreatChat');
            
        },
      },
    });
  }
  static get componentName() {
    return "ButtonCreatChat";
  }
  render() {
    return `
            <button
              type="submit"
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
            >
              Создать чат
            </button>
    `;
  }


}