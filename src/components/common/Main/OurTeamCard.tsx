import "./OurTeamCard.scss";

interface CardProps {
    img: string,
    name: string,
    position: string,
}


const OurTeamCard = (props: CardProps) => {
    return (
        <div className="team-card">
        <img src={props.img} alt="image" className="team-card__image"/>
        {props.name && <p className="team-card__name">{props.name}</p>}
        {props.position && <div className="team-card__position">{props.position}</div>}
        </div>
    )
}
export default OurTeamCard;