import { Block } from "../../../../modules/Block/Block";
import { IMessagesState } from "../../../../modules/Store/StoreTypes";
import { arrayToChildrenString } from "../../../../utils/arrayChildrenString";

export class MessagesBlock extends Block<IMessagesState[]> {
  static get componentName() {
    return "MessagesBlock";
  }
  constructor(props: IMessagesState[]) {
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
