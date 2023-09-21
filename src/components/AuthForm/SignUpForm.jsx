import React from "react";
import { CircularProgress, Typography, styled } from "@mui/material";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/slices/authSlice";
import { validationAuthSignUp } from "../../helpers/validate/authValidate";
import { showErrorsSignUp } from "../../helpers/authErrors";
import { FormWrapper } from "../../layout/FormWrapper";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
  const { data, isLoading, isAuthorizated } = useSelector(
    (state) => state.auth
  );
  console.log(data, isLoading, isAuthorizated);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (values.password === values.confirmPassword) {
      dispatch(
        signUp({
          email: values.email,
          name: values.name,
          password: values.password,
        })
      );
    } else {
      alert("!!!!");
    }
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validateOnChange: false,
    validationSchema: validationAuthSignUp,
  });

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <Input
        fullWidth
        label="Email"
        type="email"
        value={values.email}
        name="email"
        onChange={handleChange}
      />
      <Input
        fullWidth
        label="Name"
        type="text"
        value={values.name}
        name="name"
        onChange={handleChange}
      />
      <Input
        fullWidth
        label="Password"
        type="password"
        value={values.password}
        name="password"
        onChange={handleChange}
      />
      <Input
        fullWidth
        label="Confirm password"
        type="password"
        value={values.confirmPassword}
        name="confirmPassword"
        onChange={handleChange}
      />
      {/* {showErrorsSignUp(errors) && (
          <Typography>{showErrorsSignUp(errors)}</Typography>
        )} */}
      <Button type="submit">
        {isLoading ? (
          <CircularProgress size={"1.5rem"} />
        ) : (
          "Зарегистрироваться"
        )}
      </Button>
      <Paragraph>
        Уже зарегистрированы? <Link to="/sign-in" />
        <span>Войти</span>{" "}
      </Paragraph>
    </FormWrapper>
  );
};

// const ErrorsStyle= styled(Typography)(()=>({

// }))
// const Wrapper = styled("div")`
//   margin-bottom: 120px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const FormBlock = styled("form")`
//   width: 411px;
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   flex-direction: column;
//   gap: 39px;
// `;

const Paragraph = styled("p")`
  margin-top: -19px;
  & > span {
    color: #0040ff;
  }
`;

// const Loading = styled(CircularProgress)(() => ({
//   "& > svg": {},
// }));
