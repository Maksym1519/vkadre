import "./Home.scss";
import Header from "../../widgets/header/Header";
import HomeOrderPhotosession from "./HomeOrderPhotosession/HomeOrderPhotosession";
import AboutProject from "./AboutProject/AboutProject";

const Home = () => { 
 
  return (
    <div className="home__wrapper">
      <div className="container">
        <Header />
        <HomeOrderPhotosession />
        <AboutProject />
      </div>
    </div>
  );
};

export default Home;
