import { Block } from "../../../../modules/Block/Block";
import store from "../../../../modules/Store/Store";
import { IMessagesState } from "../../../../modules/Store/StoreTypes";

export class SingleMessage extends Block<IMessagesState> {
  myId: string | undefined;
  static get componentName() {
    return "SingleMessage";
  }
  constructor(props: IMessagesState) {
    super({
      ...props,
      myId: store.getState().currentUser?.id.toString(),
    });
  }

  render() {
    return ` 
      <div class="messages__item ${
  this.props.myId === this.props.user_id
    ? "messages__item_my-message"
    : ""
}"
      >
        <p class="messages__display-name">
          {{displayName}}
        </p>
        <p class="messages__content">
          {{content}}
        </p>
        <p class="messages__time"> ${new Date(this.props.time).getHours()}: ${
  (new Date(this.props.time).getMinutes() < 10 ? "0" : "") +
          new Date(this.props.time).getMinutes()
}
        </p>
      </div>
    `;
  }
}
