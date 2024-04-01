import "./CardItem.scss";
import LocationIcon from "@img/locationIcon.svg";

interface CardProps {
  img: any;
  title: string;
  location: string;
  description: string;
}

const CardItem = (props: CardProps) => {
  return (
    <div className="card-item">
      <img src={props.img} alt="image" />
      <div className="card-item__info">
        {props.title && <p className="card-item__title">{props.title}</p>}
        {props.location ? (
          <div className="card-item__location">
            {<img src={LocationIcon} alt="location" />}
            {props.location}
          </div>
        ) : (
          ""
        )}
        {props.description && (
          <p className="card-item__description">{props.description}</p>
        )}
      </div>
    </div>
  );
};
export default CardItem;
