import "./Calendar.scss";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setPopup } from "store/slices/calendar/calendarSlice";
import { setPhotosessionInfo } from "store/slices/calendar/calendarSlice";
import { useMatchMedia } from "hooks/use-match-media";
import close from "@img/cross.svg";
import location from "@img/location.svg";


const CalendarPopup = () => {
  const dispatch = useAppDispatch();
  const closeWindow = () => {
    dispatch(setPopup(false));
  };
  
  const eventsInfo = useAppSelector((state) => state.calendar.photosessionInfo);
  
  //matchmedia-------------------------------------
  const screenWidth = useMatchMedia();
  return (
    <div className="calendar-popup">
      <div className="calendar-popup__body">
        {eventsInfo &&
          eventsInfo.map((item: any, index: number) => (
            <div className="calendar-popup__item" key={index}>
              <p className="calendar-popup__time">
                {item.attributes.time ? item.attributes.time : "12:00"}
              </p>
              <p className="calendar-popup__place">Парк Шевченко</p>
              <div className="calendar-popup__location">
                <img src={location} alt="location" />
                <p className="calendar-popup__location-city">Одесса</p>
              </div>
            </div>
          ))}
      </div>
      <img
        src={close}
        alt="close"
        className={
          !screenWidth.isMobile
            ? "calendar-popup__close"
            : "calendar-popup__close_mobile"
        }
        onClick={() => {closeWindow(); dispatch(setPhotosessionInfo(null))}}
      />
    </div>
  );
};

export default CalendarPopup;
