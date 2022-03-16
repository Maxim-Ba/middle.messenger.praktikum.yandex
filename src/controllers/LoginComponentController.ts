import { Router } from "../modules/Router/Router";
import store from "../modules/Store/Store";

class LoginComponentController {
  goToRegistration() {
    const router = new Router();
    router.go("/sign-up");
    store.set("reason", null);
  }
}
export default new LoginComponentController();
