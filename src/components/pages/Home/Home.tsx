import "./Home.scss";
import HomeOrderPhotosession from "./HomeOrderPhotosession/HomeOrderPhotosession";
import AboutProject from "./AboutProject/AboutProject";
import OurWorks from "./OurWorks/OurWorks";
import Calendar from "components/common/Calendar/Calendar";
import MainServices from "./MainServices/MainSeervices";
import MainLocations from "./MainLocations/MainLocations";
import MainOurTeam from "./MainOurTeam/MainOurTeam";
import Feedback from "./Feedback/Feedback";
import Questions from "./Questions/Questions";
import ContactForm from "./ContactForm/ContactForm";
import Authentication from "../Auth/Authenetication";
import { ToastContainer } from "react-toastify";

import { useAppSelector } from "store/hooks";

const Home = () => {
  const authInfo = useAppSelector((state) => state.auth.overlay);

  return (
    <div className="home">
      <HomeOrderPhotosession />
      <AboutProject />
      <OurWorks />
      <Calendar />
      <MainServices />
      <MainLocations title=""/>
      <MainOurTeam />
      <Feedback />
      <Questions />
      <ContactForm />
      {authInfo && <Authentication />}
      <ToastContainer />
    </div>
  );
};

export default Home;
