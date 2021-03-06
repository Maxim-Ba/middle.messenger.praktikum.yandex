import { ButtonTextRegistration, TitleText } from "./text";

export type RegistrationStateType = {
  fields: Array<{
    inputName: string;
    inputType: string;
    inputPlaceholder: string;
  }>;
  ButtonTextRegistration: Record<string, any>;
  TitleText: Record<string, any>;
};

export const registrationState: RegistrationStateType = {
  fields: [
    {
      inputName: "email",
      inputPlaceholder: "Почта",
      inputType: "email",
    },
    {
      inputName: "login",
      inputPlaceholder: "Логин",
      inputType: "text",
    },
    {
      inputName: "first_name",
      inputPlaceholder: "Имя",
      inputType: "text",
    },
    {
      inputName: "second_name",
      inputPlaceholder: "Фамилия",
      inputType: "text",
    },
    {
      inputName: "phone",
      inputPlaceholder: "Телефон",
      inputType: "tel",
    },
    {
      inputName: "password",
      inputPlaceholder: "Пароль",
      inputType: "password",
    },
  ],
  ButtonTextRegistration: ButtonTextRegistration,
  TitleText: TitleText,
};
