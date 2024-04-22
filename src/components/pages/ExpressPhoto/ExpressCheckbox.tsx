import "./ExpressPhotosession.scss";
import { useState, useEffect } from "react";
import bird from "@img/checkbox.svg";
import { useAppDispatch } from "store/hooks";
import { setExpressPhotoOrigin } from "store/slices/modals/expressPhotosession/expressPhotosessionSlice";
import { useMatchMedia } from "hooks/use-match-media";

const ExpressCheckbox = () => {
  const [checked, setChecked] = useState<boolean>(false);

  //set-value-----------------------------------------
  const dispatch = useAppDispatch();
  const setValues = (e: boolean) => {
    dispatch(setExpressPhotoOrigin(e));
  };

  useEffect(() => {
    dispatch(setExpressPhotoOrigin(false));
  }, []);

  const screenWidth = useMatchMedia()

  return (
    <div className="express-checkbox">
      <div
        className={
          checked
            ? "express-checkbox__checkbox_active"
            : "express-checkbox__checkbox"
        }
        onClick={() => {
          setChecked(!checked);
          setValues(!checked ? true : false);
        }}
      >
        {checked ? <img src={bird} alt="checked" /> : ""}
      </div>
      <p className="express-checkbox__text">Исходники</p>
      <p className="express-checkbox__text express-checkbox__text_light">
        {!screenWidth.isMobile && `(весь отснятый материал)`}
      </p>
    </div>
  );
};

export default ExpressCheckbox;
