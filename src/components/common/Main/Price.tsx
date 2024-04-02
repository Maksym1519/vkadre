import "./Price.scss";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { pricesInfo } from "store/slices/main/priceSlice";
import { useEffect } from "react";

type PropsType = {
  button: React.ReactNode;
  calendar: React.ReactNode;
};

const Price = (props: PropsType) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(pricesInfo());
  }, [dispatch]);

  const reduxData = useAppSelector((state) => state.price.price);

  return (
    <div className="price">
      {props.calendar ? props.calendar : ""}
      {reduxData &&
        reduxData.map((item, index) => (
          <div className="price-item" key={index}>
            <span className="price-item__time">{item.attributes.time}</span>
            <div className="price-item__dots"></div>
            <span className="price-item__price">{item.attributes.price}</span>
          </div>
        ))}
      {props.button ? props.button : ""}
    </div>
  );
};

export default Price;
