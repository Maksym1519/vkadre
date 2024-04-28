import "./Feedback.scss";
import Quote from "@img/quotes.svg";

interface PropsSlide {
    img: string,
    location: string,
    description: string,
    name: string,
    city: string
}

const FeedbackSlide = (props: PropsSlide) => {
    return (
        <div className="feedback-slide">
           <img src={props.img} alt="image" className="feedback-slide__image"/>
           <div className="feedback-slide__description">
              <img src={Quote} alt="quote" className="feedback-slide__quote"/>
              <p className="feedback-slide__location">{props.location}</p>
              <p className="feedback-slide__description">{props.description}</p>
              <img src={Quote} alt="quote" className="feedback-slide__quote"/>
              <p className="feedback-slide__name">{props.name}</p>
              <p className="feedback-slide__city">{props.city}</p>
           </div>
        </div>
    )
}
export default FeedbackSlide;