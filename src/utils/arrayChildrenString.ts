export const arrayToChildrenString = (
  childrenName: string,
  array: Array<{
    inputName: string;
    inputType: string;
    inputPlaceholder: string;
  }>,
): string => {
  let resultString = "";
  array.forEach((element) => {
    const entres: [string] = [""];
    Object.keys(element).forEach((propName) => {
      entres.push(
        `${propName}="${(element as Record<string, any>)[propName]}"`,
      );
    });
    resultString = resultString + `{{{${childrenName} ${entres.join(" ")} }}}`;
  });
  return resultString;
};
