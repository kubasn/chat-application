import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./components/mui/theme";
import RoomPage from "./components/RoomPage/RoomPage";
import { Routes, Route } from "react-router";
import { LoginForm } from "./components/LoginPage/LoginForm";
import { RegisterForm } from "./components/LoginPage/RegisterForm";
import { Home } from "./components/Home/Home";
import { NotFound } from "./components/utils/NotFound";
import SelectRoom from "./components/SelectRoomPage/SelectRoom";
import AdminPage from "./components/AdminPage/AdminPage";
import UserRoute from "./components/ProtectedRoute/UserRoute";
import AdminRoute from "./components/ProtectedRoute/AdminRoute";

const App =  () => {
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<UserRoute />}>
        <Route path="/room" element={<RoomPage />} />
        <Route path="/selection" element={<SelectRoom />} />
        </Route>
        <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
