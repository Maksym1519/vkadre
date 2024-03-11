import "./Home.scss";
import HomeOrderPhotosession from "./HomeOrderPhotosession/HomeOrderPhotosession";
import AboutProject from "./AboutProject/AboutProject";

const Home = () => { 
 
  return (
    <div className="home">
      <div className="container">
        <HomeOrderPhotosession />
        <AboutProject />
        </div>
   </div>
  );
};

export default Home;
