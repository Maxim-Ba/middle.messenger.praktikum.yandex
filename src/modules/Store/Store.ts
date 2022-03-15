import { EventBus } from "../../utils/EventBus";
import { set } from "../../utils/set";

type Indexed = { [key: string]: any };
enum StoreEvents {
  UPDATED = "UPDATED",
}
class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }
  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.UPDATED);
  }
}

export default new Store();
