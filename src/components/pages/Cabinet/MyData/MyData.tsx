import "../Cabinet.scss";
import { useEffect, useState } from "react";
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
import Plus from "@img/plus.svg";
import Minus from "@img/minus.svg";
import { useMatchMedia } from "hooks/use-match-media";

const MyData = () => {
  //get-user-data-localstorage&&pass-id-to-redux-------------------------------------------
  const userInfo = userData();
 
  const dispatch = useAppDispatch();
  const reduxData = useAppSelector((state) => state.guests.guests);
  
  useEffect(() => {
    dispatch(cabinetApiGet(userInfo.id));
    dispatch(getUserId(userInfo));
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormGuestValues>({
    defaultValues: {
      data: {
        username: userInfo.username,
        phone: userInfo.phone,
        email: userInfo.id,
      },
    },
  });

  //widthScreen-------------------------------------
  const screenWidth = useMatchMedia()

  //show/hide-content-mobile-screen------------------------------------
  const [showComponent, setShowComponent] = useState<boolean>(false);
  useEffect(() => {
    if(!screenWidth.isMobile) {
      setShowComponent(true)
    }
  },[])
  return (
    <div className="my-data">
         <div className="my-data__title" onClick={() => setShowComponent(!showComponent)}>
          <SubTitle text="Мои данные" />
          {screenWidth.isMobile && <img src={showComponent ? Minus : Plus} alt="icon"/>}
        </div>
    {showComponent &&
      <form
        onSubmit={handleSubmit(cabinetApiFetch(reduxData && reduxData.id))}
        className="my-data-form"
      >
        <div className="my-data-form__input-wrapper">
          <img src={User} alt="user" className="my-data-form__input-icon" />
          <TextField
            id="input-username"
            defaultValue={reduxData?.attributes.username}
            placeholder={reduxData ? reduxData?.attributes?.username : "ИМЯ"}
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
            id="input-phone"
            defaultValue={reduxData?.attributes.phone}
            placeholder={reduxData ? reduxData.attributes.phone : "телефон"}
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
            id="input-email"
            defaultValue={reduxData?.attributes.email}
            placeholder={reduxData ? reduxData.attributes.email : "Email"}
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
}
    </div>
  );
};

export default MyData;
