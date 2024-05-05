import "../Cabinet.scss";
import { useAppSelector } from "store/hooks";
import { userData } from "hooks/localStorageData";
import ActionLine from "../Common/ActionLine";
import Location from "@img/locationIcon.svg";
import Calendar from "@img/calendar.svg";
import Clock from "@img/clock.svg";
import Download from "@img/download.svg";
import Info from "@img/info.svg";
import Comment from "@img/comment.svg";

const LastedPhotoItem = () => {
  const reduxData = useAppSelector(
    (state) => state.futurePhotosession.futurePhotosession
  );

  //curent-data-----------------------------------
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const fullYear = currentDate.getFullYear();
  const formatedDate = `${day}.${month}.${fullYear}`;

  //check-data-for-fitting-current-user-id----------
  const currentUserId = userData();

  //Filtration
  const filteredData = reduxData && reduxData.length > 0 && reduxData?.filter((item) => {
    //Compare-dates
    const comparisonResult = compareDates(item?.attributes?.date, formatedDate);
    return comparisonResult < 0 && item?.attributes?.email === currentUserId.id;
  });
  
  //filter-data-by-comparing-date---------------------------------
  function compareDates(dateString1: string, dateString2: string) {
    // Разбиваем строки даты на массив компонентов
    const date1Parts = dateString1.split(".");
    const date2Parts = dateString2.split(".");

    // Преобразуем каждый компонент в число
    const day1 = parseInt(date1Parts[0], 10);
    const month1 = parseInt(date1Parts[1], 10) - 1;
    const year1 = parseInt(date1Parts[2], 10);

    const day2 = parseInt(date2Parts[0], 10);
    const month2 = parseInt(date2Parts[1], 10) - 1;
    const year2 = parseInt(date2Parts[2], 10);

    // Создаем объекты Date из компонентов
    const date1 = `${year1}.${month1}.${day1}`;
    const date2 = `${year2}.${month2}.${day2}`;

    // Сравниваем даты
    if (date1 < date2) {
      return -1;
    } else if (date1 > date2) {
      return 1;
    } else {
      return 0;
    }
  }

  const hasData = filteredData && filteredData.length > 0;

  return (
    <div className="future-photo-item-wrapper">
      {hasData ? (
        filteredData &&
        filteredData.map((item, index) => (
          <div className="future-photo-item" key={index}>
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
                  <p>{item.attributes.date}</p>
                </div>
                <div className="future-photo-item__time-hours">
                  <img src={Clock} alt="calendar" />
                  <p>{item.attributes.time}</p>
                </div>
              </div>
            </div>
            <div className="lasted-photo-item__actions">
              <ActionLine img1={Download} text="СКАЧАТЬ ФОТО" img2={Info} />
              <ActionLine img1={Comment} text="Оставить отзыв" img2={Info} />
            </div>
          </div>
        ))
      ) : (
        <div>Фотосессий у Вас нет </div>
      )}
    </div>
  );
};

export default LastedPhotoItem;
