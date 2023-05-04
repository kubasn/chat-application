import React from "react";
import { Button, Container, CssBaseline } from "@mui/material";
import { StyledBigBox } from "../Home/Home.styles";
import { StyledSmallBox, StyledForm, StyledTypoSub } from "./Forms.styles";
import { ThemeProvider } from "@mui/material/styles";
import { themes } from "../mui/theme";
import { useNavigate } from "react-router-dom";
import { Welcome } from "../utils/Welcome";
import { BasicInput } from "./BasicInput";
import { PasswordInput } from "./PasswordInput";
import { StyledButton } from "./StyledButton";

import { useDispatch } from "react-redux";
import { setUserRegisterDetails } from "../../store/reducers/userSlice";

import { users } from "../../db";

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

    const isAdminIncluded = loginValue.toUpperCase().includes("admin");

    if (loginValue === "" || emailValue === "" || passwordValue === "") {
      alert("Please fill all the required fields");
    } else if (isMailInDB) {
      alert(
        `${emailValue} is already in base. Please use another email adress.`
      );
    } else if (isLoginInDB || isAdminIncluded) {
      alert(`${loginValue} is already in base. Please use another login`);
    } else {
      form.reset();
      alert("Congratulations! Welcome");
      navigate("/selection");
      dispatch(
        setUserRegisterDetails({
          login: loginValue,
          email: emailValue,
          password: passwordValue,
        })
      );
    }
  };

  return (
    <ThemeProvider theme={themes}>
      <Container maxWidth="sm">
        <CssBaseline />
        <StyledBigBox>
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
        </StyledBigBox>
      </Container>
    </ThemeProvider>
  );
};
