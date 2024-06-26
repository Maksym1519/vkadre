import "../ExpressPhotosession.scss";
import { ExpressPhotoType } from "types/expressPhoto/expressPhotoType";
import { TextField } from "@mui/material";
import Button from "components/ui/buttons/Button";
import { useAppSelector } from "store/hooks";
import { useState } from "react";
import bird from "@img/checkbox.svg";
import { UseFormRegister, SubmitHandler } from "react-hook-form";

const ExpressSummary = (props: {
  register: UseFormRegister<ExpressPhotoType>;
  errors: {
    data?: {
      certificate?: { message: string };
    };
  };
  handleSubmit: SubmitHandler<ExpressPhotoType>;
}) => {
  //get-total-sum-------------------------------------------
  const totalSum = useAppSelector((state) => state.expressPhoto.data.sum);

  //--------------------------------------------------------
  const [checked, setChecked] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="express-summary">
      <div className="express-summary__certificate">
        <TextField
          id="standard-basic"
          placeholder="№ Сертификата"
          variant="standard"
          className="order-photo-form__input"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...props.register("data.certificate", {
            required: "Certificate number is required",
          })}
          error={!!props.errors.data?.certificate}
          helperText={props.errors.data?.certificate?.message}
        />
        <div
          className="express-summary__button"
          onClick={() => setClicked(!clicked)}
        >
          <Button text="Применить" clicked={clicked} type="button"/>
        </div>
      </div>

      <div className="express-summary__sum">
        <p className="express-summary__sum-text">К оплате </p>
        <p className="express-summary__sum-numbers">
          {totalSum && totalSum}грн
        </p>
      </div>

      <div className="express-checkbox">
        <div
          className={
            checked
              ? "express-checkbox__checkbox_active"
              : "express-checkbox__checkbox"
          }
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? <img src={bird} alt="checked" /> : ""}
        </div>
        <p
          className="express-checkbox__text express-checkbox__text_underline"
          onClick={() => {
            setChecked(!checked);
          }}
        >
          Принимаю условия
        </p>
      </div>
    </div>
  );
};

export default ExpressSummary;
