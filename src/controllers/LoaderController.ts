import store from "../modules/Store/Store";

class LoaderConteroller {
  store: typeof store;
  constructor() {
    this.store = store;
  }
  start(){
    this.store.set("isLoading", true);
  }
  end(){
    this.store.set("isLoading", false);

  }
}
export default new LoaderConteroller();
