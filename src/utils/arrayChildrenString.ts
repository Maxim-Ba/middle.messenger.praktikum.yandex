export const arrayToChildrenString = (
  childrenName: string,
  array: Array<{}>,
  extraProps: null | Array<object> = null
): string => {
  let resultString = "";
  array.forEach((element) => {
    const entres: [string] = [""];
    Object.keys(element).forEach((propName) => {
      entres.push(
        `${propName}="${(element as Record<string, any>)[propName]}"`
      );
    });
    if (extraProps) {
      const extraPropsString = addExtraProps(extraProps);
      resultString =
        resultString +
        `{{{${childrenName} ${entres.join(" ")} ${extraPropsString}}}}`;
    } else {
      resultString =
        resultString + `{{{${childrenName} ${entres.join(" ")} }}}`;
    }
  });
  return resultString;
};

function addExtraProps(extraProps: Array<object>): string {
  const entres: [string] = [""];
  extraProps.forEach((prop) => {
    Object.keys(prop).forEach((propName) => {
      entres.push(`${propName}=${propName}`);
    });
  });
  return entres.join(" ");
}
