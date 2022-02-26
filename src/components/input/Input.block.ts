import { Block } from "../../modules/Block";

export class Input extends Block {
  static get componentName() {
    return "Input";
  }
  render() {
    return `
      <div class="wrapper-input-and-label">
        <label class="form-label" for={{inputName}}>
          {{inputPlaceholder}}

        </label>
        <input
          name={{inputName}}
          class="input"
          type={{inputType}}
          placeholder={{inputPlaceholder}}
          id={{inputName}}
        />
        </div>
    `;
  }
}
