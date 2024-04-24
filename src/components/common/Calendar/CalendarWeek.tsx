import "./Calendar.scss";
import { useAppSelector } from "store/hooks";
import CalendarInfo from "./CalendarInfo";

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
  const currentWeek = useAppSelector((state) => state.calendar.weekIndex);

  //get-photosessionInfo--------------------------------------
  const photosessionInfo = useAppSelector(
    (state) => state.futurePhotosession.futurePhotosession
  );

  
  return (
    <div className="calendar-week">
      {dates.slice(currentWeek, currentWeek + 1).map((dayObj, index) => (
        <div className={"calendar-week-column"} key={index}>
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
                className={`calendar-week-column__header ${
                  currentWeek === idx
                    ? "calendar-week-column__header_active"
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

export default CalendarWeek;
