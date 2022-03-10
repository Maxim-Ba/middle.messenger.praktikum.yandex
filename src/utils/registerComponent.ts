import { Block } from "../modules/Block/Block";
import * as Handlebars from "handlebars";
export function registerComponent(Component: typeof Block) {
  Handlebars.registerHelper(
    Component.componentName,
    function ({ hash, data }: Handlebars.HelperOptions) {
      if (!data.root.children) {
        data.root.children = {};
      }
      const { children } = data.root;

      const component = new Component(hash);

      children[component._id] = component;

      return `<div data-id="${component._id}"></div>`;
    }
  );
}
