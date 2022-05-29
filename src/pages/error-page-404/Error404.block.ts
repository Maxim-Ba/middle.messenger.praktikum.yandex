import { Block } from "../../modules/Block/Block";


export class Error404Block extends Block<Record<string, any>> {

  static get componentName() {
    return "Error404Block";
  }
  
  render() {
    return `
        <main class="page-error">
            <div class="page-error__container">
                <h1 class="page-error__title">404</h1>
                <h2 class="page-error__subtitle">Не туда попали</h2>
                {{{ToChatsButtonError}}}
            </div>
        </main>
    `;
  }

  
}
