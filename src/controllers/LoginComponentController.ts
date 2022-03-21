import router from "../modules/Router/Router";
import store from "../modules/Store/Store";

class LoginComponentController {
  goToRegistration() {
    router.go("/sign-up");
    store.set("reason", null);
  }
}
export default new LoginComponentController();
