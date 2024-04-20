import "../ExpressPhotosession.scss";
import { useEffect } from "react";
import { FuturePhotoPostType } from "types/modals/modals";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { userData } from "hooks/localStorageData";
import user from "@img/user.svg";
import phone from "@img/phone.svg";
import email from "@img/email.svg"

const ExpressForm = () => {
  //get-userId-local-storage---------------------------
  const userId = userData();

  //useForm-------------------------------------------------
  const form = useForm<FuturePhotoPostType>({});
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  useEffect(() => {
    if (userId) {
      form.setValue("data.userId", userId.id);
    }
  }, [userId, form]);
  return (
    <form className="express-form">
        <div className="order-photo-form__date-date">
          <img
            src={user}
            alt="calendar"
            />
            <TextField
            id="standard-basic"
            placeholder="Имя"
            variant="standard"
            className="order-photo-form__input"
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            type="text"
            {...register("data.username", { required: "Username is required" })}
            error={!!errors.data?.username}
            helperText={errors.data?.username?.message}
          />
        </div>
        <div className="order-photo-form__date-date">
          <img
            src={phone}
            alt="calendar"
            />
            <TextField
            id="standard-basic"
            placeholder="Телефон"
            variant="standard"
            className="order-photo-form__input"
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            type="text"
            {...register("data.phone", { required: "Phone number is required" })}
            error={!!errors.data?.phone}
            helperText={errors.data?.phone?.message}
          />
        </div>
        <div className="order-photo-form__date-date">
          <img
            src={email}
            alt="calendar"
            />
            <TextField
            id="standard-basic"
            placeholder="Электронная почта"
            variant="standard"
            className="order-photo-form__input"
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            type="text"
            {...register("data.email", { required: "Email is required" })}
            error={!!errors.data?.email}
            helperText={errors.data?.email?.message}
          />
        </div>
    </form>
  );
};

export default ExpressForm;
