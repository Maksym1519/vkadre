import "./Questions.scss";
import Title from "components/ui/forms/Title";
import QuestionsItem from "./QuestionsItem";


const Questions = () => {
    return ( 
    <section className="questions">
        <Title text="Вопросы \ ответы"/>
        <QuestionsItem />
    </section> );
}
 
export default Questions;