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
import {sportsResults} from "./sportsResults";
import { useEffect } from "react";
import axios from "axios"
const App =  () => {

// const getSportResults = async ()=> {
//   const sport = 'Soccer'; // You can use any sport supported by the API, e.g., 'Soccer', 'Basketball', 'Baseball', etc.
//   const date = '2023-05-07'; // Format: 'YYYY-MM-DD'
//   let results = await sportsResults(sport, date);
//   console.log(results)
// }

//   useEffect( ()=>{
//     async function fetchData() {
//       const sport = 'Soccer'; // You can use any sport supported by the API, e.g., 'Soccer', 'Basketball', 'Baseball', etc.
//       const date = '2023-05-07'; // Format: 'YYYY-MM-DD'
//       const data = await sportsResults(sport, date);
//       console.log(data);
//     }
//     fetchData();

//     // getSportResults()
//   },[])

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
