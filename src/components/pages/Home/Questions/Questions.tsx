import "./Questions.scss";
import Title from "components/ui/forms/Title";
import QuestionsItem from "./QuestionsItem";
import Blur from "@img/Splines  00039.webp";

const Questions = () => {
  
  return (
    <section className="questions">
      <div className="questions-title">
        <Title text="Вопросы \ ответы" />
      </div>
      <QuestionsItem />
      <img src={Blur} loading="lazy" alt="blur" className="questions__blur"/>
    </section>
  );
};

export default Questions;
