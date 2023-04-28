import React from "react";
import { FormControl, FilledInput, InputLabel } from "@mui/material";

export const BasicInput = ({ children, inputName, inputType }) => {
  return (
    <FormControl
      variant="filled"
      required
      sx={{
        backgroundColor: "white",
        width: "100%",
        borderRadius: "8px",
      }}
    >
      <InputLabel htmlFor="filled-adornment-password" color="secondary">
        {children}
      </InputLabel>
      <FilledInput
        required
        color="secondary"
        fullWidth
        type={inputType}
        name={inputName}
      />
    </FormControl>
  );
};
