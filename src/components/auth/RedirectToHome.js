import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthToken } from "../../features/authSlice";

const RedirectToHome = ({ children }) => {
  const authToken = useSelector(selectAuthToken);

  return authToken ? <Navigate to="/" replace /> : children;
};

export default RedirectToHome;
