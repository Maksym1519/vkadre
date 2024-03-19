import "./Home.scss";
import HomeOrderPhotosession from "./HomeOrderPhotosession/HomeOrderPhotosession";
import AboutProject from "./AboutProject/AboutProject";
import OurWorks from "./OurWorks/OurWorks";
import MainServices from "./MainServices/MainSeervices";
import MainLocations from "./MainLocations/MainLocations";
import MainOurTeam from "./MainOurTeam/MainOurTeam";
import Feedback from "./Feedback/Feedback";
import Questions from "./Questions/Questions";

const Home = () => {
  return (
    <div className="home">
      <HomeOrderPhotosession />
      <AboutProject />
     <OurWorks />
     <MainServices />
     <MainLocations />
     <MainOurTeam />
     <Feedback />
     <Questions />
    </div>
  );
};

export default Home;
