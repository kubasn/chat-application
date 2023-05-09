import React from "react";
import { StyledBox } from "./Home.styles";
import { Link } from "react-router-dom";
import { StyledButton } from "../LoginPage/StyledButton";
import { Welcome } from "../utils/Welcome";

import { StyledBackground } from "../utils/StyledBackground";

export const Home = () => {
  return (
    <StyledBackground>
      <Welcome />
      <StyledBox>
        <Link to="login">
          <StyledButton>LOG IN</StyledButton>
        </Link>
        <Link to="register">
          <StyledButton>REGISTER</StyledButton>
        </Link>
      </StyledBox>
    </StyledBackground>
  );
};
