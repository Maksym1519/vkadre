import "./ExpressPhotosession.scss";
import { useEffect } from "react";
import SubTitle from "components/ui/forms/SubTitle";
import { useAppSelector, useAppDispatch } from "store/hooks";
import {
  setExpressPhotoSum,
  setExpressPhotoLength,
} from "store/slices/modals/expressPhotosession/expressPhotosessionSlice";

const ExpressSum = () => {
  const rowTitle: Array<string> = [
    "Стоимость фотосессии:",
    "Доступность исходников:",
    "Итого:",
  ];

  //get-data-from-redux---------------------------------
  const timeValues = useAppSelector((state) => state.expressPhoto.data);
  console.log(timeValues);
  const firstValue = timeValues.length > "25 мин" ? "500" : "250";
  const secondValue = timeValues.origin === true ? "300" : "0";
  const thirdValue =
    timeValues.origin === true
      ? (parseInt(firstValue) + parseInt(secondValue)).toString()
      : firstValue;

  const sumValuesFuncs = [
    () => firstValue,
    () => secondValue,
    () => thirdValue,
  ];

  //set-total-sum-----------------------------------
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setExpressPhotoSum(thirdValue));
  }, [thirdValue]);

  useEffect(() => {
    dispatch(setExpressPhotoLength(""));
  }, []);

  return (
    <div className="express-sum">
      <div className="express-sum__title">
        <SubTitle text="Сумма" />
      </div>
      {rowTitle.map((item, index) => (
        <div className="express-sum__row" key={index}>
          <p className="express-sum__row-title">{item}</p>
          <p className="express-sum__row-value">{sumValuesFuncs[index]()}грн</p>
        </div>
      ))}
    </div>
  );
};

export default ExpressSum;
