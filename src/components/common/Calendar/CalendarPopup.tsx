import "./Calendar.scss";
import close from "@img/cross.svg";
import location from "@img/location.svg";
import { FC } from "react";

interface PropsType {
  closePopup: () => void;
  photoInfo: any;
}

const CalendarPopup = (props: PropsType) => {
  return (
    <div className="calendar-popup">
      <div className="calendar-popup__body">
        {props.photoInfo.map((item: any, index: number) => (  <div className="calendar-popup__item" key={index}>
          <p className="calendar-popup__time">{item.attributes.time ? item.attributes.time : "12:00"}</p>
          <p className="calendar-popup__place">Парк Шевченко</p>
          <div className="calendar-popup__location">
            <img src={location} alt="location" />
            <p className="calendar-popup__location-city">Одесса</p>
          </div>
        </div>))}
      
      </div>
      <img
        src={close}
        alt="close"
        className="calendar-popup__close"
        onClick={props.closePopup}
      />
    </div>
  );
};

export default CalendarPopup;
