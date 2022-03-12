import { Block } from "../modules/Block/Block";

export function killDOM(query: string, block: Block<any>) {
  const root = document.querySelector(query);
  const rootChildren = root?.childNodes;
  if (rootChildren) {
    [...rootChildren].forEach((node) => {
      node.remove();
    });
  }
  block.dispatchComponentWillUnmount();
}
