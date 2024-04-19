import "./ExpressPhotosession.scss";
import ExpressNavigation from "./ExpressNavigation";
import Title from "components/ui/forms/Title";
import MainPhoto from "./MainPhoto";
import ExpressTime from "./ExpressTime";
import ExpressSum from "./ExpressSum";
import blur from "@img/blur.webp"

const ExpressPhotosession = () => {
  return (
    <div className="express-photosession">
      <div className="express-photosession__body">
        <ExpressNavigation />

        <div className="express-photosession-title">
          <Title text="16 марта: парк «тараса шевченка». Цветение магнолий" />
        </div>
        <main className="express-photosession-content">
          <MainPhoto />
          <ExpressTime />
          <ExpressSum />
        </main>
        <img src={blur} alt="blur" className="express-photosession__blur"/>
      </div>
    </div>
  );
};

export default ExpressPhotosession;
