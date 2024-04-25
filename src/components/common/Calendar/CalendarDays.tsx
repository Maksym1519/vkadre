import { useAppSelector } from "store/hooks";
import "./Calendar.scss";
import DaysHeader from "./DaysHeader";
import CalendarInfo from "./CalendarInfo";
import { useState } from "react";


const CalendarDays = () => {
  const dates = [
    {
      "01 апреля": "понедельник",
      "02 апреля": "вторник",
      "03 апреля": "среда",
    },
    {
      "04 апреля": "четверг",
      "05 апреля": "пятница",
      "06 апреля": "суббота",
    },
    {
      "07 апреля": "воскресенье",
      "08 апреля": "понедельник",
      "09 апреля": "вторник",
    },
  ];

  //----------------------------------------------------------
  const [periodIndex, setPeriodIndex] = useState<number>(0);

  const handleNextPeriod = () => {
    if (periodIndex < dates.length - 1) {
      setPeriodIndex(periodIndex + 1);
    } else {
      return;
    }
  };

  const handlePrevPeriod = () => {
    if (periodIndex > 0) {
      setPeriodIndex(periodIndex - 1);
    } else {
      return;
    }
  };

  //----------------------------------------------------------
  const photosessionInfo = useAppSelector(
    (state) => state.futurePhotosession.futurePhotosession
  );

  return (
    <div className="calendar-days">
      <DaysHeader
        handleNextPeriod={handleNextPeriod}
        handlePrevPeriod={handlePrevPeriod}
      />

      {dates.slice(periodIndex, periodIndex + 1).map((dayObj, index) => (
        <div className={"calendar-days-column"} key={index}>
          {Object.entries(dayObj).map(([date, day], idx) => {
            const dayNumber = parseInt(date.split(" ")[0], 10);

            const matchingPhotosessions =
              photosessionInfo &&
              photosessionInfo.filter((item) => {
                const photoDayNumber = parseInt(
                  item.attributes.date.split(".")[0],
                  10
                );
                return photoDayNumber === dayNumber;
              });

            return (
              <div
                key={idx}
                className={`calendar-days-column__header ${
                  periodIndex === idx
                    ? "calendar-days-column__header_active"
                    : ""
                }`}
              >
                <p className="calendar-days-column__header-date">{date}</p>
                <p className="calendar-days-column__header-day">{day}</p>

                {matchingPhotosessions &&
                  matchingPhotosessions.map((item, index) => (
                    <CalendarInfo
                      key={index}
                      place={"Парк Шевченко"}
                      date={item.attributes.date}
                      length={item.attributes.length}
                    />
                  ))}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
