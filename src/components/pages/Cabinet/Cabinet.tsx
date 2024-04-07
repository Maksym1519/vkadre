import "./Cabinet.scss";
import Title from "components/ui/forms/Title";
import CabinetNavigation from "./CabinetNavigation";
import MyData from "./MyData/MyData";

const Cabinet = () => {
  return (
    <div className="cabinet">
      <Title text="Личный кабинет" />
      <section className="cabinet-content">
         <CabinetNavigation />
        <MyData />
      </section>
    </div>
  );
};

export default Cabinet;
