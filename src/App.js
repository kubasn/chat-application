import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./components/mui/theme";
import RoomPage from "./components/RoomPage/RoomPage";
import { Routes, Route } from "react-router";
import { LoginForm } from "./components/LoginPage/LoginForm";
import { RegisterForm } from "./components/LoginPage/RegisterForm";
import { Links } from "./components/LoginPage/Links";
import { Home } from "./components/Home/Home";
import { NotFound } from "./components/utils/NotFound";

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;

// import { CssBaseline } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";
// import { themes } from "./components/mui/theme";
// import RoomPage from "./components/RoomPage/RoomPage";
// import { Routes, Route } from "react-router";
// import { LoginForm } from "./components/LoginPage/LoginForm";
// import { RegisterForm } from "./components/LoginPage/RegisterForm";
// import { Links } from "./components/LoginPage/Links";
// import { Home } from "./components/Home/Home";

// const App = () => {
//   return (
//     <ThemeProvider theme={themes}>
//       <CssBaseline />
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route path="home" element={<Links />} />
//           <Route path="home/login" element={<LoginForm />} />
//           <Route path="home/register" element={<RegisterForm />} />
//         </Route>
//         <Route path="/rooms" element={<RoomPage />} />
//       </Routes>
//     </ThemeProvider>
//   );
// };
// export default App;
