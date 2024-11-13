import homeImage from "../assets/homeImg.png";
import SpinningTagCloud from "./SpinningTagCloud";
import { SocialIcon } from "react-social-icons";
import { Row, Col } from "react-bootstrap";
import "./Home.scss";

const style = { width: 35, height: 35, margin: 6 };
const path = "portfolio-site/assets/profile3.png";
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
    url="https://play.google.com/store/apps/details?id=za.co.app.budgetbee&hl=en&gl=TR"
    style={style}
  />
);
const Email = (
  <SocialIcon network="email" url="mailto:jtekniq@gmail.com" style={style} />
);

function Home() {
  return (
    <>
      <div className="container Page">
        <div className="row ">
          <div className="col col-md-4">
            <div className="vstack gap-3">
              <div className="Slogan">
                <h4 className="line2 anim-typewriter2 SloganBody">
                  Joe Malebe
                </h4>
                <p className="line1 anim-typewriter1 SloganBody">
                  The Software Engineer
                </p>
              </div>
              <div>
                <SpinningTagCloud />
              </div>
              <div className="SocialIcons mb-5">
                
                <span className="SocialIcon">{Github}</span>
                <span className="SocialIcon">{LinkedIn}</span>
                <span className="SocialIcon">{StackOverflow}</span>
                <span className="SocialIcon">{AppStore}</span>
                <span className="SocialIcon">{Email}</span>
              </div>
            </div>
          </div>

          <div className="col col-md Main-Photo" style={{backgroundImage: `url('${homeImage}')`}}>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
