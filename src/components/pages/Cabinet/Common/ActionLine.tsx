import "../Cabinet.scss";

type PropsType = {
    img1: string,
    text: string,
    img2: string
}

const ActionLine = (props: PropsType) => {
    return ( 
        <div className="action-line">
           <img src={props.img1} alt="icon" />
           <p>{props.text}</p>
           <img src={props.img2} alt="icon" />
        </div>
     );
}
 
export default ActionLine;