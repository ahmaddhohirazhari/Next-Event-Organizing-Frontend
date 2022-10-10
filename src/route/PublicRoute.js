import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();
  if (isAuthenticated) {
    return <Navigate to="/" state={{ form: location }} replace />;
  }
  return <Outlet />;
}
