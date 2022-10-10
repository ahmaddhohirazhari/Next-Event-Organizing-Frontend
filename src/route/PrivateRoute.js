import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(props) {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();
  const roleUser = "user";
  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ form: location }} replace />;
  }
  if (props.isAdmin && roleUser !== "Admin") {
    return <Navigate to="/notFound" state={{ form: location }} replace />;
  }
  return <Outlet />;
}
