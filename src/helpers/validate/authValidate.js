import * as yup from "yup";

const validationAuthSignUp = yup.object().shape({
  email: yup.string().required("Почта обязательное поле!"),
  name: yup.string().required("Имя обязательное поле!"),
  password: yup
    .string()
    .min(6, "Пароль должен быть больше 6 символов!")
    .max(100)
    .required("Пароль обязательное поле"),
  confirmPassword: yup.string().required(" Подвердите Пароль "),
});

const validationAuthSignIn = yup.object().shape({
  email: yup.string().required("Почта обязательное поле!"),
  password: yup
    .string()
    .min(6, "Пароль должен быть больше 6 символов!")
    .max(100)
    .required("Пароль обязательное поле"),
});

export { validationAuthSignUp, validationAuthSignIn };
