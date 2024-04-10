import "./Cabinet.scss";
import { useAppSelector } from "store/hooks";
import Title from "components/ui/forms/Title";
import CabinetNavigation from "./CabinetNavigation";
import MyData from "./MyData/MyData";
import FuturePhoto from "./FuturePhoto/FuturePhoto";
import LastedPhoto from "./LastedPhoto/LastedPhoto";
import { ToastContainer } from "react-toastify";
import Blur from "@img/blur.webp"



const Cabinet = () => {
  const activeComponentIndex = useAppSelector((state) => state.mainServices.index)
  const components: Record<number, JSX.Element> = {
    0: <MyData />,
    1: <FuturePhoto />,
    2: <LastedPhoto />
  };

  const activeComponent = components[activeComponentIndex] || null;
 
  return (
    <div className="cabinet">
      <Title text="Личный кабинет" />
      <section className="cabinet-content">
         <CabinetNavigation />
        {activeComponent}
      </section>
      <ToastContainer />
      <img src={Blur} alt="blur" className="cabinet__blur" />
    </div>
  );
};

export default Cabinet;
