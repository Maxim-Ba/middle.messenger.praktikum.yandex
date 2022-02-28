import { Block } from "./Block";
import * as Handlebars from "handlebars";

export function compile(
  templateString: string,
  context: any,
  Component: Block<Record<string, any>>
) {
  // @ts-ignore
  const fragment = Component._createDocumentElement(
    "template"
  ) as HTMLTemplateElement;

  const template = Handlebars.compile(templateString);
  const htmlString = template({ ...context, children: Component.children });
  fragment.innerHTML = htmlString;

  Object.values(Component.children).forEach((child) => {
    const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

    stub?.replaceWith(child.getContent());
  });

  return fragment.content;
}
