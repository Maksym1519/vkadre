import "./Calendar.scss";
import { useAppSelector } from "store/hooks";


const CalendarWeek = () => {
  const dates = [
    {
      "01 апреля": "понедельник",
      "02 апреля": "вторник",
      "03 апреля": "среда",
      "04 апреля": "четверг",
      "05 апреля": "пятница",
      "06 апреля": "суббота",
      "07 апреля": "воскресенье",
    },
    {
      "08 апреля": "понедельник",
      "09 апреля": "вторник",
      "10 апреля": "среда",
      "11 апреля": "четверг",
      "12 апреля": "пятница",
      "13 апреля": "суббота",
      "14 апреля": "воскресенье",
    },
    {
      "15 апреля": "понедельник",
      "16 апреля": "вторник",
      "17 апреля": "среда",
      "18 апреля": "четверг",
      "19 апреля": "пятница",
      "20 апреля": "суббота",
      "21 апреля": "воскресенье",
    },
    {
      "22 апреля": "понедельник",
      "23 апреля": "вторник",
      "24 апреля": "среда",
      "25 апреля": "четверг",
      "26 апреля": "пятница",
      "27 апреля": "суббота",
      "28 апреля": "воскресенье",
    },
  ];

  //get-week-index-from-redux----------------------------------
  const currentWeek = useAppSelector((state) => state.calendar.weekIndex)
  
    return (
    <div className="calendar-week">
      {dates.slice(currentWeek, currentWeek + 1).map((dayObj, index) => (
        <div className="calendar-week-grid" key={index}>
          <div className={"calendar-week-grid__column"} >
            {Object.entries(dayObj).map(([date, day]) => (
              <div className="calendar-days-grid__header" key={date}>
                <p className="calendar-days-grid__header-date">{date}</p>
                <p className="calendar-days-grid__header-day">{day}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarWeek;
