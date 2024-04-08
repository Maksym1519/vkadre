import "./Cabinet.scss";
import Title from "components/ui/forms/Title";
import CabinetNavigation from "./CabinetNavigation";
import MyData from "./MyData/MyData";
import { ToastContainer } from "react-toastify";

const Cabinet = () => {
  return (
    <div className="cabinet">
      <Title text="Личный кабинет" />
      <section className="cabinet-content">
         <CabinetNavigation />
        <MyData />
      </section>
      <ToastContainer />
    </div>
  );
};

export default Cabinet;
