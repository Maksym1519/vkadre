import { useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setPeriod } from "store/slices/calendar/calendarSlice";
import { setWeek } from "store/slices/calendar/calendarSlice";
import "./Calendar.scss";
import Title from "components/ui/forms/Title";
import CalendarCity from "./CalendarCity";
import { useMatchMedia } from "hooks/use-match-media";
import calendarLight from "@img/calendarLight.svg";
import listLight from "@img/listLight.svg";
import calendarDark from "@img/calendarDark.svg";
import listDark from "@img/listDark.svg";
import arrowLeft from "@img/calendarArrowLeft.svg";
import arrowRight from "@img/calendarArrowRight.svg";

const CalendarHeader = () => {
  const timeItem: Array<string> = ["3 дня", "7 дней", "1 месяц"];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  //dispatch-period----------------------------------------
  const dispatch = useAppDispatch();
  const handlePeriod = (index: number) => {
    dispatch(setPeriod(index));
    setActiveIndex(index);
  };

  //matchMedia----------------------------------------------
  const screenWidth = useMatchMedia();

  //get-period-state--------------------------------------
  const periodIndex = useAppSelector((state) => state.calendar.period);

  //----------------------------------------------------------
  const [weekIndex, setWeekIndex] = useState<number>(0);
  const handleNextWeek = () => {
    if (weekIndex < week1.length - 1) {
      setWeekIndex(weekIndex + 1);
      dispatch(setWeek(weekIndex + 1));
    } else {
      return;
    }
  };

  const handlePrevWeek = () => {
    if (weekIndex > 0) {
      setWeekIndex(weekIndex - 1);
      dispatch(setWeek(weekIndex - 1));
    } else {
      return;
    }
  };

  const week1: Array<string> = [
    "01-07 апреля",
    "08-14 апреля",
    "15-21 апреля",
    "22-28 апреля",
  ];

  const month: Array<string> = ["апрель", "май", "июнь", "июль"];

  return (
    <div className="calendar-header">
      <div className="calendar-header__title">
        <Title text="Календарь" />
        {periodIndex !== 0 && (
          <div className="calendar-header__date">
            на
            {
              <div className="calendar-header__date_light">
                {(periodIndex === 1 && week1[weekIndex]) ||
                  (periodIndex === 2 && month[weekIndex])}
              </div>
            }
          </div>
        )}

        {periodIndex !== 0 && (
          <div className="calendar-header__arrows">
            <img
              src={weekIndex === 0 ? arrowLeft : arrowRight}
              alt="arrow"
              onClick={() => handlePrevWeek()}
              className={
                weekIndex === 0 ? "" : "calendar-header__arrows_disabled"
              }
            />
            <img
              src={weekIndex === week1.length - 1 ? arrowLeft : arrowRight}
              alt="arrow"
              onClick={() => handleNextWeek()}
              className={
                weekIndex === week1.length - 1
                  ? "calendar-header__arrows_disabled"
                  : ""
              }
            />
          </div>
        )}
         <CalendarCity />
      </div>

     

      {!screenWidth.isMobile && (
        <div className="calendar-header-period">
          {timeItem.map((item, index) => (
            <div
              className={
                activeIndex === index
                  ? "calendar-header-period__item"
                  : "calendar-header-period__item_passive"
              }
              key={index}
              onClick={() => handlePeriod(index)}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {screenWidth.isMobile && (
        <div className="calendar-header-period__icones">
          <img src={listLight} alt="list" />
          <img src={calendarLight} alt="calendar" />
        </div>
      )}
    </div>
  );
};

export default CalendarHeader;
