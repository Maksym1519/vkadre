import "./Home.scss";
import HomeOrderPhotosession from "./HomeOrderPhotosession/HomeOrderPhotosession";
import AboutProject from "./AboutProject/AboutProject";
import OurWorks from "./OurWorks/OurWorks";
import MainServices from "./MainServices/MainSeervices";

const Home = () => {
  return (
    <div className="home">
      <HomeOrderPhotosession />
      <AboutProject />
     <OurWorks />
     <MainServices />
    </div>
  );
};

export default Home;
