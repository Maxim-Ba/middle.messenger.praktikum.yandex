import { Block } from "../../../modules/Block/Block";


export class ButtonDeleteUser extends Block<Record<string, any>> {
  constructor(props:Record<string, any>) {
    super({
      ...props,
      events: {
        click: () => {
            console.log('ButtonDeleteUser');
            
        },
      },
    });
  }
  static get componentName() {
    return "ButtonDeleteUser";
  }
  render() {
    return `
            <button
              type="submit"
              class="modal-window__button modal-window__button_long modal-window__button_b-r-8px modal-window__button_blue"
            >
                Удалить
            </button>
    `;
  }


}