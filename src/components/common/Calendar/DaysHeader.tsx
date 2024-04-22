import "./Calendar.scss";
import { useState } from "react";
import location from "@img/location.svg";
import arrowLeft from "@img/calendarArrowLeft.svg";
import arrowRight from "@img/calendarArrowRight.svg";

const DaysHeader = () => {
  //----------------------------------------------------------
  const week1: Array<string> = [
    "1","2","3"
  ];
  const [periodIndex, setperiodIndex] = useState<number>(0);
  const handleNextWeek = () => {
    if (periodIndex < week1.length - 1) {
      setperiodIndex(periodIndex + 1);
    } else {
      return;
    }
  };

  const handlePrevWeek = () => {
    if (periodIndex > 0) {
      setperiodIndex(periodIndex - 1);
    } else {
      return;
    }
  };
  return (
    <div className="days-header">
      <div className="days-header__location">
        <img src={location} alt="location" />
        <p className="days-header__city">Одесса</p>
      </div>
      <div className="calendar-header__arrows">
        <img
          src={periodIndex === 0 ? arrowLeft : arrowRight}
          alt="arrow"
          onClick={() => handlePrevWeek()}
          className={periodIndex === 0 ? "" : "calendar-header__arrows_disabled"}
        />
        <img
          src={periodIndex === week1.length - 1 ? arrowLeft : arrowRight}
          alt="arrow"
          onClick={() => handleNextWeek()}
          className={
            periodIndex === week1.length - 1
              ? "calendar-header__arrows_disabled"
              : ""
          }
        />
      </div>
    </div>
  );
};

export default DaysHeader;
