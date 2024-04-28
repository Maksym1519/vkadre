import "./OrderPhotosession.scss";


interface OrderPhotoPopupProps {
  handlChange: (selectedValue: string) => void;
}

const OrderPhotoPopup = (props: OrderPhotoPopupProps) => {
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
        <p key={index} className="order-photo-popup__row" onClick={() => props.handlChange(item)}>{item}</p>
      ))}
    </div>
  );
};

export default OrderPhotoPopup;
