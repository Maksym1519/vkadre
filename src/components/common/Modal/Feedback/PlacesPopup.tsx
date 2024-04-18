import "./FeedbackModal.scss";

const PlacesPopup = (props: any) => {
  const placesArray: Array<string> = [
    "Оперный театр",
    "Ботанический сад",
    "Дом",
    "Море",
    "Морской порт",
    "Дерибасовская улица",
    "Горсад",
    "Музей",
    "Березовая роща",
    "",
  ];
  return (
    <div className="location-popup">
      {placesArray &&
        placesArray.map((item, index) => (
          <div className="location-popup__item" key={index} onClick={() => props.getPlacesValue(item)}>{item}</div>
        ))}
    </div>
  );
};

export default PlacesPopup;
