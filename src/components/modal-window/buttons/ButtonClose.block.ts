import { Block } from "../../../modules/Block/Block";


export class ButtonClose extends Block<Record<string, any>> {
  constructor(props:Record<string, any>) {
    super({
      ...props,
      events: {
        click: () => {
            this.props.closeWindow();
        },
      },
    });
  }
  static get componentName() {
    return "ButtonClose";
  }
  render() {
    return `
            <button
              class="modal-window__button modal-window__button_small modal-window__button_b-r-8px modal-window__button_grey"
            >
              Отмена
            </button>
    `;
  }


}
