import { Link } from "react-router-dom";
import classes from "./InvalidPathPage.module.css";

const InvalidPathPage = () => {
  return (
    <div className={classes.container}>
      <h1>
        Looks like you are lost in space. Click <Link to="/">here</Link> to go
        home
      </h1>
    </div>
  );
};
export default InvalidPathPage;
