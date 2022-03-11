import { Block } from "../Block/Block.js";
import Route from "./Route";

class Router {
  static __instance: Router;
  routes: Route[];
  history: History;
  private _currentRoute: Route | null;
  private _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: any, props: any = {}) {
    const route = new Route(pathname, block, {
      rootQuery: this._rootQuery,
      ...props,
    });

    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: Event) => {
      this._onRoute((event.currentTarget as Window).location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    // route.render(route, pathname); // вопрос
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }
  back() {
    console.log("------------back");
    this.history.back();
    console.log(window.location, "window.location.pathname");
    this._onRoute(window.location.pathname);
  }

  forward() {
    console.log("------------forward");
    this.history.forward();
    console.log(window.location, "window.location.pathname");

    this._onRoute(window.location.pathname);
  }
  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export { Router };
