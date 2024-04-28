import "./ExpressPhotosession.scss";
import { useState } from "react";
import { useAppDispatch } from "store/hooks";
import { setExpressPhotoLength } from "store/slices/modals/expressPhotosession/expressPhotosessionSlice";


const ExpressLength = () => {
  const lengthOptions: Array<string> = ["10 мин", "20 мин", "30 мин", "60 мин"];

  //activeIndex-----------------------------------------
  const [activeIndex, setActiveIndex] = useState<number>();

   //set-value-----------------------------------------
   const dispatch = useAppDispatch();
   const setValues = (e: string) => {
     dispatch(setExpressPhotoLength(e));
   };

   return (
    <div className="express-length">
      <h3 className="express-length__title">Длительность фотосессии</h3>
      <div className="express-time__options-wrapper">
        {lengthOptions.map((item, index) => (
          <div
            className={
              activeIndex === index
                ? "express-time__option_active"
                : "express-time__option"
            }
            key={index}
          onClick={() => {setActiveIndex(index); setValues(item)}}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpressLength;
