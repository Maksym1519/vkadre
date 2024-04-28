import "./Calendar.scss";

interface PropsType {
  place: string;
  date: string;
  length: string;
}

const CalendarInfo = (props: PropsType) => {
  return (
    <div className="calendar-info">
      <p className="calendar-info__place">{props.place}</p>
      <p className="calendar-info__date">{props.date}</p>
      <p className="calendar-info__length">{props.length}</p>
    </div>
  );
};

export default CalendarInfo;
