import classes from "./MainNavigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuthToken } from "../../features/authSlice";
import { Link } from "react-router-dom";
import { deleteAllTodos } from "../../features/todoSlice";

const MainNavigation = () => {
  const authToken = useSelector(selectAuthToken);
  const dispath = useDispatch();
  const LogoutHandler = (e) => {
    dispath(logout());
    dispath(deleteAllTodos());
    localStorage.clear();
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Todo App</Link>
      </div>
      <nav>
        <ul>
          <li>{authToken && <Link to="/create-todo-task">Add Todo</Link>}</li>
          <li>{authToken && <span onClick={LogoutHandler}>Logout</span>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
