import "../Cabinet.scss";
import ActionLine from "../Common/ActionLine";
import Location from "@img/locationIcon.svg";
import Calendar from "@img/calendar.svg";
import Close from "@img/closeCircle.svg";
import Clock from "@img/clock.svg"

const FuturePhotoItem = () => {
  return (
    <div className="future-photo-item-wrapper">
      <div className="future-photo-item">
        <div className="future-photo-item__info">
          <h3 className="future-photo-item__title">
            Парк «Тараса Шевченка». Цветение магнолий.
          </h3>
          <div className="future-photo-item__location">
            <img src={Location} alt="location" />
            <p>г.Одесса</p>
          </div>
          <div className="future-photo-item__time">
            <div className="future-photo-item__time-days">
               <img src={Calendar} alt="calendar" />
               <p>3.04.2022</p>
            </div>
            <div className="future-photo-item__time-hours">
            <img src={Clock} alt="calendar" />
               <p>14:00 - 14:10</p>
            </div>
          </div>
        </div>
       <ActionLine img1={Close} text={"Отменить бронь"} img2={Calendar}/>
      </div>
     </div>
  );
};

export default FuturePhotoItem;
