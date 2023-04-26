import { CssBaseline } from "@mui/material";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./components/mui/theme";
import RoomPage from "./components/RoomPage/RoomPage";

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      {/* <LoginPage /> */}
      <RoomPage/>
    </ThemeProvider>
  );
}
export default App;
