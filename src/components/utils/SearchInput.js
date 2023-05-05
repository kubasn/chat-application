import React from "react";
import { FormControl, FilledInput, InputLabel } from "@mui/material";

export const SearchInput = ({ children, inputName, inputType,onChange }) => {
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
        onChange={onChange}
        fullWidth
        type={inputType}
        name={inputName}
      />
    </FormControl>
  );
};
