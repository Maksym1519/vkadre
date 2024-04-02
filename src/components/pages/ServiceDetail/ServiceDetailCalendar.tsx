import "./ServiceDetail.scss";
import { useState } from "react";
import Calendar from "@img/calendar.svg";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

type PropsType = {
  isActive: boolean;
  setIsActive: any;
};

const ServiceDetailCalendar = (props: PropsType) => {
  const [currentDate, setCurrentDate] = useState();

  const handleDateChange = (newDate: any) => {
    const formatedDate = newDate.toDate().toLocaleDateString();
    setCurrentDate(formatedDate);
    console.log(formatedDate);
  };

  return (
    <div className="service-detail-calendar">
      <p className="service-detail-calendar__title">
        Доступные на данный момент даты:
      </p>
      <div className="service-detail-calendar__info">
        <img
          src={Calendar}
          alt="icon"
          onClick={() => props.setIsActive(true)}
        />
        {props.isActive && (
          <Datetime
            input={false}
            timeFormat={false}
            initialValue={"01.01.2024"}
            onChange={(e) => handleDateChange(e)}
            className="service-detail-calendar__calendar"
          />
        )}
        <p>{currentDate}</p>
      </div>
    </div>
  );
};

export default ServiceDetailCalendar;
