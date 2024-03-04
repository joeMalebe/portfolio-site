import homeImage from "../assets/homeImg.png";
import SpinningTagCloud from "./SpinningTagCloud";
import { SocialIcon } from "react-social-icons";
import "./Home.scss";

const style = { width: 25, height: 25, margin: 6 };

const Github = (
  <SocialIcon
    url="https://github.com/joeMalebe"
    bgColor="black"
    style={style}
  />
);
const LinkedIn = (
  <SocialIcon
    url="https://www.linkedin.com/in/joe-malebe-08677478/"
    style={style}
  />
);
const StackOverflow = (
  <SocialIcon
    url="https://stackoverflow.com/users/4377454/joe-malebe/"
    style={style}
  />
);
const AppStore = (
  <SocialIcon
    network="google_play"
    url="https://play.google.gmail/apps/details?id=za.co.app.budgetbee&hl=en&gl=US"
    style={style}
  />
);
const Email = (
  <SocialIcon network="email" url="mailto:jtekniq@gmail.com" style={style} />
);

function Home() {
  return (
    <>
      <div className="container-fluid Page">
        <div className="row ">
          <div className="col col-lg">
            <div className="vstack gap-3">
              <div className="Slogan">
                <h4 className="line2 anim-typewriter2 SloganBody">
                  {" "}
                  Software Engineer{" "}
                </h4>
                <p className="line1 anim-typewriter1 SloganBody">
                  Engineer. Innovate. Lead.
                </p>
              </div>
              <div>
                <SpinningTagCloud />
                <span className="SocialIcons">
                  {Github}
                  {LinkedIn}
                  {StackOverflow}
                  {AppStore}
                  {Email}
                </span>
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
