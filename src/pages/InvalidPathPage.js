import { Link } from "react-router-dom";
const InvalidPathPage = () => {
  return (
    <div>
      Looks like you are lost in space. Click <Link to="/">here</Link> to go
      home
    </div>
  );
};
export default InvalidPathPage;
