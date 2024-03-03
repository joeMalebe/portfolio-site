import homeImage from "../assets/homeImg.png";
import SpinningTagCloud from "./SpinningTagCloud";
import { SocialIcon } from 'react-social-icons';
import "./Home.scss";
const Github = <SocialIcon url="https://github.com/joeMalebe" bgColor="currentColor" />
const LinkedIn = <SocialIcon url="https://www.linkedin.com/in/joe-malebe-08677478/" bgColor="currentColor"  className="SocialIcon"/>
const StackOverflow = <SocialIcon url="https://stackoverflow.com/users/4377454/joe-malebe/" bgColor="currentColor"/>
const AppStore = <SocialIcon network="google_play" url="https://play.google.gmail/apps/details?id=za.co.app.budgetbee&hl=en&gl=US" bgColor="currentColor"/>
const Email = <SocialIcon network="email" url="mailto:jtekniq@gmail.com" bgColor="currentColor"/>

function Home() {
  return (
    <>
      <div className="container-fluid Page">
        <div className="row ">
          <div className="col col-lg">
            <div className="vstack gap-3">
              <div className='Slogan'>
                <h4 className="line2 anim-typewriter2 SloganBody"> Software Engineer </h4>
                <p className="line1 anim-typewriter1 SloganBody">
                Engineer. Innovate. Lead.
                </p>
              </div>
              <div>
                <SpinningTagCloud  />
                <span>
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
