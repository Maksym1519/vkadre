import "./Calendar.scss";
import { useAppSelector } from "store/hooks";

const CalendarMonth = () => {
  const dates: Array<string> = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];

  const days: Array<string> = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];
  //------------------------------------------------------------
  const monthIndex = useAppSelector((state) => state.calendar.weekIndex);
  return (
    <div className="calendar-month">
      {days.map((item, index) => (
        <div className="calendar-month__header" key={index}>
          {item}
        </div>
      ))}
      {dates.map((item, index) => (
        <div className="calendar-month__cell" key={index}>{item}</div>
      ))}
    </div>
  );
};

export default CalendarMonth;
