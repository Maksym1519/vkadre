import "./CardItem.scss";
import LocationIcon from "@img/locationIcon.svg";

interface CardProps {
  img: string;
  title: string;
  location: string;
  description: string;
}

const CardItem = (props: CardProps) => {
  
  return (
    <div className="card-item">
      <img src={props.img} loading="lazy" alt="image" className="card-item__image"/>
      <div className="card-item__info">
        {props.title && <p className="card-item__title">{props.title}</p>}
        {props.location ? (
          <div className="card-item__location">
            {<img src={LocationIcon} loading="lazy" alt="location" />}
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
