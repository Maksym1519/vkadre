import "./Calendar.scss";
import DaysHeader from "./DaysHeader";
import { useAppSelector } from "store/hooks";

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

  //get-index-from-redux---------------------------
  const activePeriod = useAppSelector((state) => state.calendar.period)
  return (
    <div className="calendar-days">
      <DaysHeader />
      <div className="calendar-days-grid">
        <div className={"calendar-days-grid__column"}>
            <div className="calendar-days-grid__header">
                 <p className="calendar-days-grid__header-day"></p>
                 <p className="calendar-days-grid__header-date"></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarDays;
