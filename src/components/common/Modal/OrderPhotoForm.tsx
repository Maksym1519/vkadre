import "./OrderPhotosession.scss";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { OrderPhotoData } from "types/modals/modals";
import { orderPhotoPost } from "store/slices/modals/orderPhotoPost";
import OrderPhotoPopup from "./OrderPhotoPopup";
import InputArrow from "@img/inputArrow.svg"

const OrderPhotoForm = () => {
  const form = useForm<OrderPhotoData>({});
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  
  return (
    <>
      <form onSubmit={handleSubmit(orderPhotoPost())} className="order-photo-form">
        <TextField
          id="standard-basic"
          placeholder="ИМЯ"
          variant="standard"
          className="order-photo-form__input"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...register("data.username", { required: "Username is required" })}
          error={!!errors.data?.username}
          helperText={typeof errors.data?.username === "string" ? errors.data?.username : ""}
        />
        <TextField
          id="standard-basic"
          placeholder="Почтовый ящик"
          variant="standard"
          className="order-photo-form__input"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...register("data.username", { required: "Email is required" })}
          error={!!errors.data?.email}
          helperText={typeof errors.data?.email === "string" ? errors.data?.email : ""}
        />
        <TextField
          id="standard-basic"
          placeholder="Телефон"
          variant="standard"
          className="order-photo-form__input"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...register("data.phone", { required: "Pnone number is required" })}
          error={!!errors.data?.phone}
          helperText={typeof errors.data?.phone === "number" ? errors.data?.phone : ""}
        />
        <div className="order-photo-form__type-wrapper">
        <TextField
          id="standard-basic"
          placeholder="Тип"
          variant="standard"
          className="order-photo-form__input"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...register("data.type", { required: "Type is required" })}
          error={!!errors.data?.type}
          helperText={typeof errors.data?.type === "string" ? errors.data?.type : ""}
        />
        <img src={InputArrow} alt="arrow" className=""/>
        <OrderPhotoPopup />
        </div>
      </form>
    </>
  );
};

export default OrderPhotoForm;
