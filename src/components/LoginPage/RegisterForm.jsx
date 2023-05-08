import React from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Button } from "@mui/material";
import { StyledForm, StyledTypoSub } from "./Forms.styles";
import { useNavigate } from "react-router-dom";
import { Welcome } from "../utils/Welcome";
import { BasicInput } from "./BasicInput";
import { PasswordInput } from "./PasswordInput";
import { StyledButton } from "./StyledButton";
import { StyledBackground, StyledSmallBox } from "../utils/StyledBackground";

import { useDispatch } from "react-redux";
import { setUserRegisterDetails } from "../../store/reducers/userSlice";

import { users } from "../../db";
import * as yup from "yup";

const schema = yup.object().shape({
  login: yup
    .string()
    .required("Login is required")
    .min(4, "Login must be at least 8 characters long")
    .max(20, "Login cannot be longer than 20 characters"),
  email: yup
    .string()
    .email("Incorrect e-mail address")
    .required("E-mail is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password cannot be longer than 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const loginValue = form.elements.login.value;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    const isMailInDB = users.find((user) => user.email === emailValue);
    const isLoginInDB = users.find((user) => user.login === loginValue);
    const isAdminIncluded = loginValue.toUpperCase().includes("ADMIN");
    const newUser = {
      login: loginValue,
      email: emailValue,
      password: passwordValue,
    };

    schema
      .validate(newUser)
      .then(() => {
        if (loginValue === "" || emailValue === "" || passwordValue === "") {
          Notify.failure("Please fill all the required fields");
        } else if (isMailInDB) {
          Notify.failure(
            `${emailValue} is already in base. Please use another email adress.`
          );
        } else if (isLoginInDB || isAdminIncluded) {
          Notify.failure(
            `${loginValue} is already in base. Please use another login`
          );
        } else {
          form.reset();
          Notify.success("Congratulations! Welcome");
          navigate("/selection");
          dispatch(
            setUserRegisterDetails({
              login: loginValue,
              email: emailValue,
              password: passwordValue,
            })
          );
        }
      })
      .catch((errors) => Notify.failure(`${errors}`));
  };

  return (
    <StyledBackground>
      <Welcome />
      <StyledSmallBox>
        <StyledForm
          component="form"
          noValidate
          autoComplete="on"
          onSubmit={handleSubmit}
        >
          <BasicInput inputType="email" inputName="email">
            Email
          </BasicInput>
          <BasicInput inputType="text" inputName="login">
            Login
          </BasicInput>
          <PasswordInput>Password</PasswordInput>
          <StyledButton btnType="submit">REGISTER</StyledButton>
        </StyledForm>

        <StyledTypoSub variant="subtitle2" align="center">
          Already have an acount?
          <Button color="secondary" onClick={handleClick}>
            Log in
          </Button>
        </StyledTypoSub>
      </StyledSmallBox>
    </StyledBackground>
  );
};
