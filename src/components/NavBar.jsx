import "../App.scss";
import "../NavBar.scss";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="NavBar">
        <a href="#Projects">Projects</a>
        <Link to="experience">
          Experience
        </Link>
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
