import { Block } from "../../../../modules/Block/Block";
import store from "../../../../modules/Store/Store";

export class SingleMessage extends Block<any> {
  myId: string | undefined;
  static get componentName() {
    return "SingleMessage";
  }
  constructor(props: any) {
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
      }" >
        <p class="messages__content">
          {{content}}
        </p>

        <p class="messages__time">
          ${new Date(this.props.time).getHours()}: ${
      (new Date(this.props.time).getMinutes() < 10 ? "0" : "") +
      new Date(this.props.time).getMinutes()
    }
        </p>
      </div>
    `;
  }
}
