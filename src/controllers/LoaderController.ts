import store from "../modules/Store/Store";

class LoaderConteroller {
    store: typeof store;
    constructor() {
        this.store = store;
    }
    start(){
        this.store.set('isLoading', true)
    }
    end(){
        this.store.set('isLoading', false)

    }
}
//adapterForUserData add '_'
export default new LoaderConteroller();