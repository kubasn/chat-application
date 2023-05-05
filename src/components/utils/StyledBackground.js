import React from "react";
import styled from "styled-components";
import { Box, Container, CssBaseline } from "@mui/material";

export const StyledSmallBox = styled(Box)`
  background-color: #343434;
  border-radius: 20px;
  margin: 60px 60px;
  width: 95%;
`;

export const StyledBigBox = styled(Box)`
  background-color: rgba(28, 29, 34, 0.95);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledBackground = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <StyledBigBox>{children}</StyledBigBox>
    </Container>
  );
};
