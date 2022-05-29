import { Block } from "../../modules/Block/Block";


export class Error500Block extends Block<Record<string, any>> {

  static get componentName() {
    return "Error500Block";
  }
  
  render() {
    return `
        <main class="page-error">
          <div class="page-error__container">
            <h1 class="page-error__title">500</h1>
            <h2 class="page-error__subtitle">Уже фиксим</h2>
            {{{ToChatsButtonError}}}
          </div>
    </main>
    `;
  }

  
}
