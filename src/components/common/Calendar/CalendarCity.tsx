import "./Calendar.scss";
import { useState } from "react";

const CalendarCity = () => {
  const locations = ["Одесса", "Южный"];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  return (
    <div className="calendar-header-city">
      {locations.map((item, index) => (
        <p
          key={index}
          onClick={() => setActiveIndex(index)}
          className={
            activeIndex === index
              ? "calendar-header-city__city"
              : "calendar-header-city__city_nonactive"
          }
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default CalendarCity;
