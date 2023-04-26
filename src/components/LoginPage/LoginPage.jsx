import React from "react";
import { CssBaseline, Container } from "@mui/material";
import {
  StyledTypographyH2,
  StyledBigBox,
  StyledTypographyH6,
} from "./LoginPage.module";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <StyledBigBox>
        <StyledTypographyH2 variant="h2" align="center">
          Sportsbook
        </StyledTypographyH2>
        <StyledTypographyH6 variant="subtitle2" align="center">
          Welcome to our Sportsbook page! <br />
          To chat with your friends, please sign in.
        </StyledTypographyH6>
        {/* <LoginForm /> */}
        <RegisterForm />
      </StyledBigBox>
    </Container>
  );
};
