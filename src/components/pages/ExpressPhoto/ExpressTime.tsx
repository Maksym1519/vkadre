import "./ExpressPhotosession.scss";
import SubTitle from "components/ui/forms/SubTitle";
import ExpressLength from "./ExpressLength";
import ExpressCheckbox from "./ExpressCheckbox";
import { useState } from "react";
import { useAppDispatch } from "store/hooks";
import { setExpressPhotoTime } from "store/slices/modals/expressPhotosession/expressPhotosessionSlice";

const ExpressTime = () => {
  const timeOptions: Array<string> = [
    "10:10",
    "10:20",
    "10:30",
    "10:40",
    "10:50",
    "11:00",
    "11:10",
    "11:20",
    "11:30",
    "11:40",
    "11:50",
    "12:00",
  ];
  //activeIndex-----------------------------------------
  const [activeIndex, setActiveIndex] = useState<number>();
  const handleClick = (index: number) => {
    if (index !== 4 && index !== 8) {
      setActiveIndex(index);
    }
  };

  //set-value-----------------------------------------
  const dispatch = useAppDispatch();
  const setValues = (e: string) => {
    dispatch(setExpressPhotoTime(e));
  };

  
   return (
    <div className="express-time">
      <div className="express-time__title">
        <SubTitle text="Выберите  время" />
      </div>
      <div className="express-time__options-wrapper">
        {timeOptions.map((item, index) => (
          <div
            className={
              activeIndex === index
                ? "express-time__option_active"
                : index === 4 || index === 8
                ? "express-time__option express-time__option_passive"
                : "express-time__option"
            }
            key={index}
            onClick={() => {
              handleClick(index);
              setValues(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <ExpressLength />
      <ExpressCheckbox />
    </div>
  );
};

export default ExpressTime;
