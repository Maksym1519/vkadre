import "../ExpressPhotosession.scss";
import { ExpressPhotoType } from "types/expressPhoto/expressPhotoType";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from "components/ui/buttons/Button";

const ExpressSummary = () => {
  //useForm-------------------------------------------------
  const form = useForm<ExpressPhotoType>({});
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <div className="express-summary">
      <form>
        <div className="express-summary__certificate">
          <TextField
            id="standard-basic"
            placeholder="№ Сертификата"
            variant="standard"
            className="order-photo-form__input"
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            type="text"
            {...register("data.certificate", {
              required: "Username is required",
            })}
            error={!!errors.data?.certificate}
            helperText={errors.data?.certificate?.message}
          />
          <div className="express-summary__button">
            {" "}
            <Button text="Применить" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpressSummary;
