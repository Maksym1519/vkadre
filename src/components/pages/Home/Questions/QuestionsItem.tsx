import "./Questions.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { questionsInfo } from "store/slices/main/questionsSlice";
import minus from "@img/minus.svg";
import plus from "@img/plus.svg";

const QuestionsItem = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(questionsInfo());
  }, [dispatch]);

  const reduxData = useAppSelector((state) => state.questions.questions);

  //shut/open--------------------------------------------------
  const [clickedIndex, setClickedIndex] = useState(null);

  const clickQuestion = (index: any) => {
    if (index === clickedIndex) setClickedIndex(null);
    else setClickedIndex(index);
  };

  
  return (
    <>
      {reduxData &&
        reduxData.map((item, index) => (
          <div className="questions-item" key={index}>
            <div
              className="questions-item__header"
              onClick={() => clickQuestion(index)}
            >
              <p className="questions-item__title">{item.attributes.title}</p>
              <img src={clickedIndex === index ? minus : plus} alt="sign" />
            </div>
              <div className={clickedIndex === index ? "questions-item__answer" : "questions-item__answer-hide"}>
                <p className="questions-item__answer-text">{item.attributes.upperText}</p>
                <ul className="questions-item__answer-list">
                    <li>{item.attributes.listRow1}</li>
                    <li>{item.attributes.listRow2}</li>
                </ul>
                <p>{item.attributes.lowerText}</p>
            </div>
           </div>
        ))}
    </>
  );
};

export default QuestionsItem;
