export const partial = `
  {{#> layout}}
    {{> header}}
    {{{content}}}
    {{> footer}}
  {{/layout}}
`;

export const header = `
  {{#> layout}}
  <div>
    {{header}}
  </div>
  {{/layout}}
`;
export const footer = `
  {{#> layout}}
    {{footer}}
  {{/layout}}
`;
