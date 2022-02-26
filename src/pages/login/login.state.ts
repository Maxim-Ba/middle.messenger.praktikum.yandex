type LoginStateType = {
  fields: Array<{
    inputName: string;
    inputType: string;
    inputPlaceholder: string;
  }>;
};

export const loginState: LoginStateType = {
  fields: [
    {
      inputName: "login",
      inputPlaceholder: "Логин",
      inputType: "text",
    },
    {
      inputName: "password",
      inputPlaceholder: "Пароль",
      inputType: "password",
    },
  ],
};
