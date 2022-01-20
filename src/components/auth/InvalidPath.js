import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthToken } from "../../features/authSlice";
import InvalidPathPage from "../../pages/InvalidPathPage";

const InvalidPath = ({ children }) => {
  const authToken = useSelector(selectAuthToken);

  return authToken ? <InvalidPathPage /> : <Navigate to="/login" replace />;
};

export default InvalidPath;
