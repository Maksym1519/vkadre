import "./FeedbackModal.scss";

type PropsType = {
  getPlacesValue: (e: string) => void
}

const LocationPopup = (props: PropsType) => {
  const locationsArray: Array<string> = [
    "Одесса",
    "Южный",
    "Черноморск",
    "Николаев",
    "Киев",
    "Херсон",
    "Виница",
    "Львов",
    "Тернополь",
    "",
  ];
  return (
    <div className="location-popup">
      {locationsArray &&
        locationsArray.map((item, index) => (
          <div className="location-popup__item" key={index} onClick={() => props.getPlacesValue(item)}>{item}</div>
        ))}
    </div>
  );
};

export default LocationPopup;
