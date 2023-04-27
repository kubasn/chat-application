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

export const RegisterForm = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();

    navigate("/login");
  };
  return (
    <ThemeProvider theme={themes}>
      <Container maxWidth="sm">
        <CssBaseline />
        <StyledBigBox>
          <Welcome />
          <StyledSmallBox>
            <StyledForm component="form" noValidate autoComplete="on">
              <BasicInput>Email</BasicInput>
              <BasicInput>Login</BasicInput>
              <PasswordInput>Password</PasswordInput>
              <StyledButton>SUBMIT</StyledButton>
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
