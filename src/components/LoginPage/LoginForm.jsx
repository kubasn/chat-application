import React from "react";
import { Button, CssBaseline, Container } from "@mui/material";
import { StyledSmallBox, StyledForm, StyledTypoSub } from "./Forms.styles";
import { StyledBigBox } from "../Home/Home.styles";
import { ThemeProvider } from "@mui/material/styles";
import { themes } from "../mui/theme";
import { useNavigate } from "react-router-dom";
import { Welcome } from "../utils/Welcome";
import { BasicInput } from "./BasicInput";
import { PasswordInput } from "./PasswordInput";
import { StyledButton } from "./StyledButton";

import { useDispatch } from "react-redux";

import { setUserIsLogged } from "../../store/reducers/userSlice";

import { users } from "../../db";

export const LoginForm = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const loginValue = form.elements.login.value;
    const passwordValue = form.elements.password.value;

    const isUserInDB = users.find(
      (user) => user.login === loginValue && user.password === passwordValue
    );

    if (isUserInDB !== undefined) {
      dispatch(setUserIsLogged({ ...isUserInDB }));
      form.reset();
      navigate("/selection");
    } else {
      alert("Please fill all the required fields");
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
              <BasicInput inputType="text" inputName="login">
                Login
              </BasicInput>
              <PasswordInput>Password</PasswordInput>
              <StyledButton btnType="submit">SUBMIT</StyledButton>
            </StyledForm>

            <StyledTypoSub variant="subtitle2" align="center">
              Don't have an acount?
              <Button color="secondary" onClick={handleClick}>
                Register
              </Button>
            </StyledTypoSub>
          </StyledSmallBox>
        </StyledBigBox>
      </Container>
    </ThemeProvider>
  );
};
