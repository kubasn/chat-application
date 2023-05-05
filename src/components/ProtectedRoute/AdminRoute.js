import { Navigate, Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminRoute = (props) => {
const user = useSelector(state=>state.user)

  return user.userID && user.role == 'admin' ? <Outlet /> : <Navigate to="/login" replace />;
};
export default AdminRoute;