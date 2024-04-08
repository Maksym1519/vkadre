import "../Cabinet.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import SubTitle from "components/ui/forms/SubTitle";
import Button from "components/ui/buttons/Button";
import { cabinetApiFetch } from "store/slices/cabinet/cabinetApiPost";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import User from "@img/user.svg";
import Phone from "@img/phone.svg";
import Email from "@img/email.svg";
import { FormGuestValues } from "types/FormTypes";
import { cabinetApiGet } from "store/slices/cabinet/cabinetApiSlice";
import { userData } from "hooks/localStorageData";
import { getUserId } from "store/slices/cabinet/cabinetApiSlice";

const MyData = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(cabinetApiGet());
  }, [dispatch]);

  const reduxData = useAppSelector((state) => state.guests.guests);

  //get-user-data-localstorage&&pass-id-to-redux-------------------------------------------
  const userInfo = userData();
  useEffect(() => {
    dispatch(getUserId(userInfo));
  }, [userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormGuestValues>();

  return (
    <div className="my-data">
      <div className="my-data__title">
        <SubTitle text="Мои данные" />
      </div>
      <form onSubmit={handleSubmit(cabinetApiFetch())} className="my-data-form">
        <div className="my-data-form__input-wrapper">
          <img src={User} alt="user" className="my-data-form__input-icon" />
          <TextField
            id="standard-basic"
            placeholder="ИМЯ"
            variant="standard"
            className="my-data-form__input"
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            type="text"
            {...register("data.username", { required: "Username is required" })}
            error={!!errors.data?.username}
            helperText={errors.data?.username?.message}
          />
        </div>

        <div className="my-data-form__input-wrapper">
          <img src={Phone} alt="phone" className="my-data-form__input-icon" />
          <TextField
            id="standard-basic"
            placeholder="Телефон"
            variant="standard"
            className="my-data-form__input"
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            type="number"
            {...register("data.phone", {
              required: "Phone number is required",
              minLength: 6,
            })}
            error={!!errors.data?.phone}
            helperText={errors.data?.phone?.message}
          />
        </div>

        <div className="my-data-form__input-wrapper">
          <img src={Email} alt="phone" className="my-data-form__input-icon" />
          <TextField
            id="standard-basic"
            placeholder="Email"
            variant="standard"
            className="my-data-form__input"
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            type="email"
            {...register("data.email", { required: "Email is required" })}
            error={!!errors.data?.email}
            helperText={errors.data?.email?.message}
          />
        </div>

        <div className="my-data-form__button">
          <Button text="Сохранить" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default MyData;
