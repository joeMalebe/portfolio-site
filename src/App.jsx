import "bootstrap/dist/css/bootstrap.css";

import "./App.scss";
import NavBar from "./components/NavBar";
import { HomePage } from "./pages/home/index";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ExperiencePage } from "./pages/experience/index";
import { ProjectsPage} from "./pages/projects/index";

function App() {
  return (
    <div class="container-fluid overflow-hidden Page">
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/portfolio-site" exact Component={HomePage} />
          <Route path="/experience" Component={ExperiencePage} />
          <Route path="/projects" Component={ ProjectsPage } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
