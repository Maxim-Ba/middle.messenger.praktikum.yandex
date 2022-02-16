export function render(query: string, block) {
  const root = document.querySelector(query);

  // Можно завязаться на реализации вашего класса Block
  console.log(block.getContent(), "<-block.getContent()");
  root?.appendChild(block.getContent().content);

  block.dispatchComponentDidMount();

  return root;
}
