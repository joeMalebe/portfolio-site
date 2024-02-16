import homeImage from '../assets/homeImg.png';
import '../Home.scss';
function Home() {
  return (
    <>
      <div className="row Page">
        <div className="col-md">
            <h4 className='line2 anim-typewriter2'> Hello world! </h4>
          <p className="line1 anim-typewriter1">Code. Create. Android Awesomeness.</p> 
        </div>
        <div className="col-md">
          <img src={homeImage}/>
        </div>
      </div>
    </>
  );
}

export default Home;
