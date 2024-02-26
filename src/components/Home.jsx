import homeImage from "../assets/homeImg.png";
import SpinningTagCloud from "./SpinningTagCloud";
import "../Home.scss";
function Home() {
  return (
    <>
      <div className="container-fluid Page">
        <div className="row ">
          <div className="col col-lg">
            <div class="vstack gap-3">
              <div class='Slogan'>
                <h4 className="line2 anim-typewriter2"> Software Engineer </h4>
                <p className="line1 anim-typewriter1">
                Engineer. Innovate. Lead.
                </p>
              </div>
              <div>
                <SpinningTagCloud  />
              </div>
            </div>
          </div>

          <div className="col col-lg">
            <img src={homeImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
