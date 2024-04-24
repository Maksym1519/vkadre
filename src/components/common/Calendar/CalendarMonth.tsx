import "./Calendar.scss";
import { useAppSelector } from "store/hooks";
import CalendarPopup from "./CalendarPopup";
import { FC, useState } from "react";

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

  //get-photosessionInfo--------------------------------------
  const photosessionInfo = useAppSelector(
    (state) => state.futurePhotosession.futurePhotosession
  );

  //popup-state-------------------------------------------------
  const [calendarPopup, setCalendarPopup] = useState<boolean>(false);
  const showPopup = () => {
    setCalendarPopup(true)
  }
  const closePopup = () => {
    setCalendarPopup(false)
  }
  //----------------------------------------------------------------
  const [selectedEvents, setSelectedEvents] = useState<any[]>([]);
  console.log(selectedEvents)
  const handleCellClick = (date: string) => {
      const matchingEvents = photosessionInfo && photosessionInfo.filter((event) =>
      event.attributes.date.startsWith(`${date}.`)
     );

     if (matchingEvents && matchingEvents.length > 0) {
      setSelectedEvents(matchingEvents);
    } else {
      setSelectedEvents([]);
    }
  };

  return (
    <div className="calendar-month">
       {days.map((item, index) => (
        <div className="calendar-month__header" key={index}>
          {item}
        </div>
      ))}

     
      {dates.map((date, index) => {
         const matchingEvents = photosessionInfo && photosessionInfo.filter((event) =>
          event.attributes.date.startsWith(`${date}.`)
        );

        return (
          <div
            className={
              matchingEvents && matchingEvents?.length > 0
                ? "calendar-month__cell"
                : "calendar-month__cell_nonactive"
            }
            key={index}
            onClick={() => {handleCellClick(date); showPopup()}}
          >
           
            <span>{date}</span>
            <span className="calendar-month__cell-events">
              {matchingEvents && matchingEvents.length > 0 && `${matchingEvents.length} ${
                matchingEvents.length === 1 ? "фотосессия" : "фотосессий"
              }`}
            </span>
          </div>
        );
      })}
      {calendarPopup && <CalendarPopup closePopup={closePopup} photoInfo={selectedEvents}/>}
  </div>
  );
     
  
      
  
};

export default CalendarMonth;
