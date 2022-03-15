import { Block } from "../../modules/Block/Block";
import { Router } from "../../modules/Router/Router";
interface LinkProps {
  router: Router;
  to: string;
}
export class Link extends Block<any> {
  constructor({ to, router }: LinkProps) {
    super({
      to,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          router.go(to);
        },
      },
    });
  }

  render() {
    return `<a href="{{to}}">{{text}}</a>`;
  }
}
