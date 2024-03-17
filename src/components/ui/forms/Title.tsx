import "./Title.scss";

interface PropsText {
    text: string | null
}

const Title = (props:PropsText) => {
    return (
        <h3 className="title">{props.text}</h3>
    )
}
export default Title;