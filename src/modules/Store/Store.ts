import { EventBus } from "../../utils/EventBus";
import { isEqual } from "../../utils/isEqual";
import { set } from "../../utils/set";
import { Block } from "../Block/Block";
import { IStore } from "./StoreTypes";

enum StoreEvents {
  UPDATED = "UPDATED",
}

class Store extends EventBus {
  private state: IStore = {};

  public getState() {
    return this.state;
  }
  public set(path: keyof IStore, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.UPDATED);
    console.log(this.getState(), "getState");
  }
}
const store = new Store();

export const withStore =
  (mapStateToProps: (state: IStore) => any) => (Component: typeof Block) => {
    let state: Record<string, any>;
    return class extends Component<any> {
      constructor(props: Record<string, any>) {
        state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.UPDATED, () => {
          const newState = mapStateToProps(store.getState());
          if (!isEqual(state, newState)) {
          }
          this.setProps({ ...newState });
        });
      }
    };
  };

export default store;
