import { Navigate, Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const UserRoute = (props) => {
const user = useSelector(state=>state.user)

  return user.userID ? <Outlet /> : <Navigate to="/login" replace />;
};
export default UserRoute;