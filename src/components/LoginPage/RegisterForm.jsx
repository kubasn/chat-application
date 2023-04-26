import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  FilledInput,
  InputLabel,
  Button,
  Link,
} from "@mui/material";

import { StyledSmallBox, StyledForm, StyledTypoSub } from "./Form.module";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ThemeProvider } from "@mui/material/styles";
import { themes } from "../mui/theme";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={themes}>
      <StyledSmallBox>
        <StyledForm component="form" noValidate autoComplete="on">
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
              Email
            </InputLabel>
            <FilledInput
              id="filled-basic"
              required
              color="secondary"
              fullWidth="true"
            />
          </FormControl>

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
              Phone
            </InputLabel>
            <FilledInput
              id="filled-basic"
              required
              color="secondary"
              fullWidth="true"
              type="tel"
            />
          </FormControl>

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
              Login
            </InputLabel>
            <FilledInput
              id="filled-basic"
              required
              color="secondary"
              fullWidth="true"
            />
          </FormControl>

          <FormControl
            required
            variant="filled"
            sx={{
              backgroundColor: "white",
              width: "100%",
              borderRadius: "8px",
            }}
          >
            <InputLabel htmlFor="outlined-adornment-password" color="secondary">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              required
              color="secondary"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              borderRadius: "8px",
            }}
          >
            SUBMIT
          </Button>
        </StyledForm>
        <StyledTypoSub variant="subtitle2" align="center">
          Already have an acount?
          <Link href="#" underline="none" color="secondary">
            {" "}
            Log in
          </Link>
        </StyledTypoSub>
      </StyledSmallBox>
    </ThemeProvider>
  );
};
