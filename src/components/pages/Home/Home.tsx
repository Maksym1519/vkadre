import "./Home.scss";
import Header from "../../widgets/header/Header";
import HomeOrderPhotosession from "./HomeOrderPhotosession";

const Home = () => { 
 
  return (
    <div className="home__wrapper">
      <div className="container">
        <Header />
        <HomeOrderPhotosession />
      </div>
    </div>
  );
};

export default Home;
