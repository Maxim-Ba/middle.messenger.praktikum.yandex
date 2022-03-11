import { Block } from "../modules/Block/Block";

export function render(query: string, block: Block<any>) {
  const root = document.querySelector(query);

  root?.appendChild(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}
