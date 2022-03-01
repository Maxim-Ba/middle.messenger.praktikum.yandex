export class Validator {
  formEl: HTMLFormElement;

  constructor(formEl: HTMLFormElement) {
    this.formEl = formEl;
    this.checkValidity = this.checkValidity.bind(this);
  }

  checkValidity(inputs: NodeListOf<HTMLInputElement>): true | number {
    const isValid = this.formEl.checkValidity();
    if (isValid) {
      return true;
    } else {
      const wrongInputIndex = [...inputs].findIndex((inp, index) => {
        if (inp.name === "newPassword") {
          return inp.value !== inputs[index + 1].value;
        }
        return !inp.validity.valid;
      });
      return wrongInputIndex;
    }
  }
}
