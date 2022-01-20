import classes from "./MainNavigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuthToken } from "../../features/authSlice";

const MainNavigation = () => {
  const authToken = useSelector(selectAuthToken);
  const dispath = useDispatch();
  const LogoutHandler = (e) => {
    dispath(logout());
    localStorage.clear();
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Todo App</div>
      <nav>
        <ul>
          <li>{authToken && <span onClick={LogoutHandler}>Logout</span>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
