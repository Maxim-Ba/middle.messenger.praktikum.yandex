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

  use(pathname: string, block: Block<any>) {
    const route = new Route(pathname, block, {
      // props,
      rootQuery: this._rootQuery,
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
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }
  back() {
    this.history.back();
    this._onRoute(window.location.pathname);
  }

  forward() {
    this.history.forward();
    this._onRoute(window.location.pathname);
  }
  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export { Router };
