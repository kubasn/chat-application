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

    const isUserInDB = users.find((user) => {
      user.login === loginValue && alert(`${loginValue} is already taken`);

      user.email === emailValue && alert(`${emailValue} is already taken`);
    });

    if (loginValue === "" || emailValue === "" || passwordValue === "") {
      console.log(loginValue, emailValue, passwordValue);
      alert("Please fill all the required fields");
    } else if (isUserInDB !== undefined) {
      form.reset();
      navigate("/rooms");
      dispatch(
        setUserRegisterDetails({
          login: loginValue,
          email: emailValue,
          password: passwordValue,
        })
      );
    }

    // if (loginValue && emailValue && passwordValue !== "") {
    //   form.reset();
    //   navigate("/rooms");
    // } else {
    //   alert("Please fill all the required fields");
    // }
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
              <StyledButton btnType="submit">SUBMIT</StyledButton>
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
