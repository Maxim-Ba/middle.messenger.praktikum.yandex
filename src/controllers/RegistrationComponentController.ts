import router from "../modules/Router/Router";
import store from "../modules/Store/Store";

class RegistrationComponentController {
  goToLogin() {
    router.go("/");
    store.set("reason", null);
  }
}
export default new RegistrationComponentController();
