import { CssBaseline } from "@mui/material";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./components/mui/theme";

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;
