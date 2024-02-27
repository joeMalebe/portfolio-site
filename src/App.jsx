import "bootstrap/dist/css/bootstrap.css";

import "./App.scss";
import NavBar from "./components/NavBar";
import { HomePage } from "./pages/home/index";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ExperiencePage from "./components/ExperiencePage";

function App() {
  return (
    <div class="container-fluid overflow-hidden Page">
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/skills" Component={ExperiencePage} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
