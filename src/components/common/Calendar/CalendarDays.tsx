import { useAppSelector, useAppDispatch } from "store/hooks";
import "./Calendar.scss";
import DaysHeader from "./DaysHeader";
import CalendarInfo from "./CalendarInfo";
import { useState, useEffect } from "react";
import { futurePhotoGet } from "store/slices/modals/orderPhotosession/futurePhotosessionSlice";

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

  //get-photosession-info--------------------------
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(futurePhotoGet());
  }, []);
  const photosessionInfo = useAppSelector(
    (state) => state.futurePhotosession.futurePhotosession
  );
  console.log(photosessionInfo);

  return (
    <div className="calendar-days">
      <DaysHeader
        handleNextPeriod={handleNextPeriod}
        handlePrevPeriod={handlePrevPeriod}
      />
      {dates.slice(periodIndex, periodIndex + 1).map((dayObj, index) => (
        <div className="calendar-days-grid">
          <div className={"calendar-days-grid__column"} key={index}>
            {Object.entries(dayObj).map(([date, day], idx) => (
              <div
                className={`calendar-days-grid__header ${
                  periodIndex === idx ? "calendar-days-grid__header_active" : ""
                }`}
              >
                <p className="calendar-days-grid__header-date">{date}</p>
                <p className="calendar-days-grid__header-day">{day}</p>
              </div>
            ))}
            <>
              {photosessionInfo?.map((item, index) => (
                <CalendarInfo
                  key={index}
                  place={"Парк Шевченко"}
                  date={item.attributes.date}
                  length={item.attributes.length}
                />
              ))}
            </>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
