import { createTheme } from "@mui/material/styles";

export const themes = createTheme({
  palette: {
    secondary: {
      main: "#5359ea",
    },
  },
  typography: {
    fontFamily: [
      "Nunito Sans",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
    ].join(","),
  },
});
