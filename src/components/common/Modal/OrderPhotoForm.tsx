import "./OrderPhotosession.scss";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Datetime from "react-datetime";
import dayjs from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import clickOutside from "hooks/clickOutside";
import { OrderPhotoData } from "types/modals/modals";
import { orderPhotoPost } from "store/slices/modals/orderPhotoPost";
import OrderPhotoPopup from "./OrderPhotoPopup";
import InputArrow from "@img/inputArrow.svg";
import { useState, useRef, useEffect } from "react";
import calendar from "@img/calendar.svg";
import clock from "@img/clock.svg";
import zIndex from "@mui/material/styles/zIndex";

const OrderPhotoForm = () => {
  const form = useForm<OrderPhotoData>({});
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  //popup-state------------------------------------------
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    setIsActive(false);
  }, []);
  const popupRef = useRef<HTMLDivElement>(null);

  clickOutside(popupRef, () => setIsActive(false));

  //date&time--------------------------------------------
  const [currentDate, setCurrentDate] = useState<number | null>(null);
  const [dateCalendar, showDateCalendar] = useState<boolean>(false);

  const handleDateChange = (newDate: any) => {
    const formatedDate = newDate.toDate().toLocaleDateString();
    setCurrentDate(formatedDate);
  };

  const calendarRef = useRef<HTMLDivElement>(null);
  clickOutside(calendarRef, () => showDateCalendar(false));

  return (
    <>
      <form
        onSubmit={handleSubmit(orderPhotoPost())}
        className="order-photo-form"
      >
         <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          className="order-photo-form__date-time-picker"
          sx={{
            width: "100%",
            "& .MuiInputLabel-root.Mui-focused": { color: "#979797" }, //styles the label
            "& .MuiOutlinedInput-root": {
              "&:hover > fieldset": { borderColor: "#C7C8CD" },
              height: "48px",
              borderRadius: "6px",
              },
          }}
        />
      </LocalizationProvider>
        <TextField
          id="standard-basic"
          placeholder="ИМЯ"
          variant="standard"
          className="order-photo-form__input"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...register("data.username", { required: "Username is required" })}
          error={!!errors.data?.username}
          helperText={
            typeof errors.data?.username === "string"
              ? errors.data?.username
              : ""
          }
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
          helperText={
            typeof errors.data?.email === "string" ? errors.data?.email : ""
          }
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
          helperText={
            typeof errors.data?.phone === "number" ? errors.data?.phone : ""
          }
        />
        <div className="order-photo-form__type-wrapper" ref={popupRef}>
          <TextField
            id="standard-basic"
            placeholder="Тип"
            variant="standard"
            className="order-photo-form__input"
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            type="text"
            {...register("data.type", { required: "Type is required" })}
            error={!!errors.data?.type}
            helperText={
              typeof errors.data?.type === "string" ? errors.data?.type : ""
            }
          />
          <img
            src={InputArrow}
            alt="arrow"
            className=""
            onClick={() => setIsActive(!isActive)}
          />
          {isActive && <OrderPhotoPopup />}
        </div>

        <div className="order-photo-form__date">
          <div className="order-photo-form__date-date" ref={calendarRef}>
            <img
              src={calendar}
              alt="calendar"
              onClick={() => showDateCalendar(!dateCalendar)}
            />
            {dateCalendar && (
              <Datetime
                input={false}
                timeFormat={false}
                initialValue={"01.01.2024"}
                onChange={(e) => handleDateChange(e)}
                className="order-photo-form__date-date-calendar"
              />
            )}

            <TextField
              id="standard-basic"
              placeholder="Дата"
              value={currentDate}
              variant="standard"
              className="order-photo-form__input"
              style={{ minWidth: "100%", textTransform: "uppercase" }}
              type="text"
              {...register("data.date", { required: "Date is required" })}
              error={!!errors.data?.date}
              helperText={
                typeof errors.data?.date === "number" ? errors.data?.date : ""
              }
            />
          </div>
          <div className="order-photo-form__date-time">
            <img src={clock} alt="clock" />
            <TextField
              id="standard-basic"
              placeholder="Время"
              variant="standard"
              className="order-photo-form__input"
              style={{ minWidth: "100%", textTransform: "uppercase" }}
              type="text"
              {...register("data.time", { required: "Time is required" })}
              error={!!errors.data?.phone}
              helperText={
                typeof errors.data?.time === "number" ? errors.data?.time : ""
              }
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default OrderPhotoForm;
