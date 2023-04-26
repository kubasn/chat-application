import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { StyledBigBox } from "./Home.module";

import { Links } from "../LoginPage/Links";
import { Welcome } from "../utils/Welcome";

export const Home = () => {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <StyledBigBox>
        <Welcome />
        <Links />
      </StyledBigBox>
    </Container>
  );
};
