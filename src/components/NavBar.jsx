import "../App.scss";
import "../NavBar.scss";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="NavBar">  
        <Link to="/projects">
          Projects
        </Link>
        <Link to="/experience">
          Experience
        </Link>
        {/* <Link to="/skills">
          Skills
        </Link> */}
        <Link to="/portfolio-site">
          Joe
        </Link>
      </div>
    </>
  );
}

export default NavBar;
