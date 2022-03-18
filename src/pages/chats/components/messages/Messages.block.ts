import { Block } from "../../../../modules/Block/Block";

export class MessagesBlock extends Block<any> {
  static get componentName() {
    return "MessagesBlock";
  }
  constructor(props: any) {
    super({
      ...props,
    });
  }

  render() {
    return ` 
    <div class="first-stub" >
    {{#each messages}}
      {{messages.content}}
      {{messages.time}}
    {{/each}}

    </div>
    
    `;
  }
}
