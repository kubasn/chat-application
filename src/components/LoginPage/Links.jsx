import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledBox } from "./Links.module";

export const Links = () => {
  return (
    <StyledBox>
      <Link to="login">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          sx={{
            borderRadius: "8px",
            minWidth: "112.5px",
          }}
        >
          LOG IN
        </Button>
      </Link>
      <Link to="register">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          sx={{
            borderRadius: "8px",
            minWidth: "112.5px",
          }}
        >
          REGISTER
        </Button>
      </Link>
    </StyledBox>
  );
};
