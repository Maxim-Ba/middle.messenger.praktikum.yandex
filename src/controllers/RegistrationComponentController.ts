import { Router } from "../modules/Router/Router";
import store from "../modules/Store/Store";

class RegistrationComponentController {
  goToLogin() {
    const router = new Router();
    router.go("/");
    store.set("reason", null);
  }
}
export default new RegistrationComponentController();
