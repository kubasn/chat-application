import React from "react";
import { FormControl, FilledInput, InputLabel, Typography } from "@mui/material";

export const AdminInput = ({ children, inputName, inputType,value }) => {
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
      {/* <InputLabel htmlFor="filled-adornment-password" color="secondary">
        {children}
      </InputLabel> */}
      <Typography>
        {children}
      </Typography>
      <FilledInput
        required
        color="secondary"
        fullWidth
        value={value}
        type={inputType}
      />
    </FormControl>
  );
};
