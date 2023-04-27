import React from "react";
import { Button } from "@mui/material";

export const StyledButton = ({ children }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      size="large"
      sx={{
        borderRadius: "8px",
      }}
    >
      {children}
    </Button>
  );
};
