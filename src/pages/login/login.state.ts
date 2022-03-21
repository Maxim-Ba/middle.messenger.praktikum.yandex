import { ButtonTextLogin, TitleTextLogin } from "./text";

export type LoginStateType = {
  fields: Array<{
    inputName: string;
    inputType: string;
    inputPlaceholder: string;
  }>;
  ButtonTextLogin: Record<string, any>;
  TitleTextLogin: Record<string, any>;
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
  ButtonTextLogin,
  TitleTextLogin,
};
