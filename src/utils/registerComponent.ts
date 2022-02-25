import { Block } from "../modules/Block";
import * as Handlebars from "handlebars";
export function registerComponent(Component: typeof Block) {
  Handlebars.registerHelper(
    Component.componentName,
    function ({ hash, data }: Handlebars.HelperOptions) {
      if (!data.root.children) {
        data.root.children = {};
      }
      console.log(Component.componentName);

      if (!data.root.refs) {
        data.root.refs = {};
      }

      const { children } = data.root;

      const component = new Component(hash);

      children[component._id] = component;

      return `<div data-id="${component._id}"></div>`;
    },
  );
}
