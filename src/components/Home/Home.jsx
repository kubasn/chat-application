import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { StyledBigBox, StyledBox } from "./Home.styles";
import { Link } from "react-router-dom";
import { StyledButton } from "../LoginPage/StyledButton";
import { Welcome } from "../utils/Welcome";

export const Home = () => {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <StyledBigBox>
        <Welcome />
        <StyledBox>
          <Link to="login">
            <StyledButton>LOG IN</StyledButton>
          </Link>
          <Link to="register">
            <StyledButton>REGISTER</StyledButton>
          </Link>
        </StyledBox>
      </StyledBigBox>
    </Container>
  );
};
