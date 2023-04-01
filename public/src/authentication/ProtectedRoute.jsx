import { NavLink, Outlet } from "react-router-dom";

const ProtectedRoute = ({ login, hidePublic }) => {
  if (!hidePublic && hidePublic !== undefined) {
    return <Outlet />;
  }
  if (!login) {
    return <></>;
  }
  return <Outlet />;
};
export default ProtectedRoute;
