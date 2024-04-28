import "../ExpressPhotosession.scss";
import { useAppSelector } from "store/hooks";
import SubTitle from "components/ui/forms/SubTitle";
import location from "@img/locationIcon.svg";
import calendar from "@img/calendar.svg";
import clock from "@img/clock.svg";

const ExpressRequisites = () => {
  const selectedTime = useAppSelector((state) => state.expressPhoto.data.time);
 
   
  return (
    <div className="express-requisites">
      <div className="express-requisites__title">
        {" "}
        <SubTitle text="Оплата" />
      </div>
      <div className="express-requisites__row">
        <img
          src={location}
          alt="location"
          className="express-requisites__row-location"
        />
        <p className="express-requisites__row-text">Парк «Тараса Шевченко»</p>
      </div>
      <div className="express-requisites__row express-requisites__row_gap">
        <div className="express-requisites__date ">
          <img src={calendar} alt="calendar" />
          <p className="express-requisites__row-text">22.04.2024</p>
        </div>
        <div className="express-requisites__date">
          <img src={clock} alt="calendar" />
          <p className="express-requisites__row-text">
            {selectedTime !=="" ? selectedTime : "12:00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpressRequisites;
