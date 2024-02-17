import homeImage from "../assets/homeImg.png";
import SpinningTagCloud from "./SpinningTagCloud";
import "../Home.scss";
function Home() {
  return (
    <>
      <div className="container-fluid Page">
        <div className="row ">
          <div className="col-lg">
            <div class="vstack gap-3">
              <div>
                <h4 className="line2 anim-typewriter2"> Hello world! </h4>
                <p className="line1 anim-typewriter1">
                  Code. Create. Android Awesomeness.
                </p>
              </div>
              <div>
                <SpinningTagCloud className='TagCloud' />
              </div>
            </div>
          </div>

          <div className="col-lg">
            <img src={homeImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
