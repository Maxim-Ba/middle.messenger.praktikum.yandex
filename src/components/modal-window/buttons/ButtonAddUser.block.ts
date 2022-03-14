import { Block } from "../../../modules/Block/Block";


export class ButtonAddUser extends Block<Record<string, any>> {
  constructor(props:Record<string, any>) {
    super({
      ...props,
      events: {
        click: () => {
            console.log('ButtonAddUser');
            
        },
      },
    });
  }
  static get componentName() {
    return "ButtonAddUser";
  }
  render() {
    return `
            <button
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
            >
              Добавить
            </button>
    `;
  }


}