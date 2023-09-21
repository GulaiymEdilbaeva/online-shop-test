import { Button, Input } from "@mui/material";
import { FormWrapper } from "../../layout/FormWrapper";
import { useFormik } from "formik";
import { validationAuthSignIn } from "../../helpers/validate/authValidate";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/slices/authSlice";

export const SignInForm = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(
      signIn({
        email: values.email,
        password: values.password,
      })
    );
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
    validateOnChange: false,
    validationSchema: validationAuthSignIn,
  });
  return (
    <FormWrapper>
      <h2>Вход</h2>
      <Input
        error={Boolean(errors?.email)}
        helperText={errors?.email}
        fullWidth
        label="Email"
        type="email"
        value={values.email}
        name="email"
        onChange={handleChange}
      />
      <Input
        error={Boolean(errors?.email)}
        helperText={errors?.email}
        fullWidth
        label="Пароль"
        type="email"
        value={values.email}
        name="email"
        onChange={handleChange}
      />
      <Button type="submit" loading>
        Войти
      </Button>
    </FormWrapper>
  );
};
