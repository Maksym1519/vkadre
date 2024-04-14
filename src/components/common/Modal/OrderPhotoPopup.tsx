import "./OrderPhotosession.scss";

const OrderPhotoPopup = () => {
  const photoTypes: Array<string> = [
    "Экспресс-фото",
    "Индивидуальные фотосессии",
    "Семейная фотосессия",
    "Фотосессия дня рождения",
    "Love story",
  ];

  return (
    <div className="order-photo-popup">
      {photoTypes.map((item, index) => (
        <p key={index} className="order-photo-popup__row">{item}</p>
      ))}
    </div>
  );
};

export default OrderPhotoPopup;
