import "bootstrap/dist/css/bootstrap.css";

import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="container-fluid">
        <dic>
          <NavBar />
        </dic>

        <div>
          
            
              <Home/>
            
          
        </div>
      </div>
    </>
  );
}

export default App;
