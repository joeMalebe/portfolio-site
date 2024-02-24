import "../App.scss";
import "../NavBar.scss";
import { Link } from "react-router-dom";
import Home from "./Home";
function NavBar() {
  return (
    <>
      <div className="NavBar">
        <a href="#Projects">Projects</a>
        <a href="#Experience">Experience</a>
        <Link to="/skills">
          Skills
        </Link>
        <Link to="/">
          Home
        </Link>
      </div>
    </>
  );
}

export default NavBar;
