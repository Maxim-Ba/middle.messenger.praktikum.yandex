import { Block } from "../../../../modules/Block/Block";
import { arrayToChildrenString } from "../../../../utils/arrayChildrenString";

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
    <div class="messages" >
      ${arrayToChildrenString("SingleMessage", this.props.messages)}

    </div>
    
    `;
  }
}
