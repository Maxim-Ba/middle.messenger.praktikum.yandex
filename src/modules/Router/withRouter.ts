import { Block } from "../Block/Block";
import { Router } from "./Router";

export function withRouter(Component: typeof Block) {
  return class WithRouter extends Component<any> {
    public static componentName = Component.name;
    constructor(props: any) {
      super({ ...props, router: new Router() });
    }
  };
}
