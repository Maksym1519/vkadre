import "./Home.scss";
import HomeOrderPhotosession from "./HomeOrderPhotosession/HomeOrderPhotosession";
import AboutProject from "./AboutProject/AboutProject";
import OurWorks from "./OurWorks/OurWorks";

const Home = () => {
  return (
    <div className="home">
      <HomeOrderPhotosession />
      <AboutProject />
     <OurWorks />
    </div>
  );
};

export default Home;
