import "./Title.scss";

interface PropsText {
    text: string
}

const SubTitle = (props:PropsText) => {
    return (
        <h3 className="subTitle">{props.text}</h3>
    )
}
export default SubTitle;