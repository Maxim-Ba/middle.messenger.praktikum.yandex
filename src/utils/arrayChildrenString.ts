export const arrayToChildrenString = (
  childrenName: string,
  array: Array<any>,
): string => {
  let resultString = ``;
  array.forEach((element: object) => {
    const entres: [string] = [""];
    Object.keys(element).forEach((propName) => {
      entres.push(`${propName}="${element[propName]}"`);
    });
    resultString = resultString + `{{{${childrenName} ${entres.join(" ")} }}}`;
  });
  return resultString;
};
