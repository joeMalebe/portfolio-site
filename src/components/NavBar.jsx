import "../App.scss";
import "../NavBar.scss";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="NavBar">  
        <Link to="/projects" className="roboto-regular">
          Projects
        </Link>
        <Link to="/experience" className="roboto-regular">
          Experience
        </Link>
        {/* <Link to="/skills">
          Skills
        </Link> */}
        <Link to="/portfolio-site" className="roboto-regular">
          Joe
        </Link>
      </div>
    </>
  );
}

export default NavBar;
