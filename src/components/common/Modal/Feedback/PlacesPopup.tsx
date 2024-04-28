import "./FeedbackModal.scss";


type PropsType = {
  getLocationValue: (e: string) => void
} 

const PlacesPopup = (props: PropsType) => {
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
          <div className="location-popup__item" key={index} onClick={() => props.getLocationValue(item)}>{item}</div>
        ))}
    </div>
  );
};

export default PlacesPopup;
