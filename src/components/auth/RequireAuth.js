import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthToken } from "../../features/authSlice";

const RequireAuth = ({ children }) => {
  const authToken = useSelector(selectAuthToken);

  return authToken ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
