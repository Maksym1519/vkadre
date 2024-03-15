import "./Title.scss";

interface PropsText {
    text: string
}

const Title = (props:PropsText) => {
    return (
        <h3 className="title">{props.text}</h3>
    )
}
export default Title;