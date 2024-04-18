import "./OrderPhotosession.scss";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Datetime from "react-datetime";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import clickOutside from "hooks/clickOutside";
import { FuturePhotoPostType } from "types/modals/modals";
import { orderPhotoPost } from "store/slices/modals/orderPhotosession/orderPhotoPost";
import { userData } from "hooks/localStorageData";
import OrderPhotoPopup from "./OrderPhotoPopup";
import Booking from "./Booking";
import InputArrow from "@img/inputArrow.svg";
import { useState, useRef, useEffect } from "react";
import calendar from "@img/calendar.svg";
import clock from "@img/clock.svg";


const OrderPhotoForm = () => {
  //get-userId-local-storage---------------------------
  const userId = userData()

  //useForm-------------------------------------------------
  const form = useForm<FuturePhotoPostType>({});
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  useEffect(() => {
      if (userId) {
      form.setValue("data.userId", userId.id);
    }
  }, [userId, form]);

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

  //time----------------------------------------------------
  const [selectedTime, setSelectedTime] = useState<string | null>("");
  const [timePicker, showTimePicker] = useState<boolean>(false)

  const handleTimeChange = (time:string|null) => {
    setSelectedTime(time);
  };
  //free-order-----------------------------------
  const freeOrderTextPlaceholder: string = `поле текстовое в несколько строк для свободной заявки`;

  //get-value-from-booking--------------------------------------
  const [typeValue, setTypeValue] = useState<string | null>(null); 

  const handleGetTypeValue = (e: string) => {
     setTypeValue(e);
  };

       
  return (
    <form
      onSubmit={handleSubmit(orderPhotoPost())}
      className="order-photo-form"
    >
      <TextField
        id="standard-basic"
        placeholder="ИМЯ"
        variant="standard"
        className="order-photo-form__input"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        type="text"
        {...register("data.username", { required: "Username is required" })}
        error={!!errors.data?.username}
        helperText={errors.data?.username?.message}
         />

      <TextField
        id="standard-basic"
        placeholder="Почтовый ящик"
        variant="standard"
        className="order-photo-form__input"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        type="email"
        {...register("data.email", { required: "Email is required" })}
        error={!!errors.data?.email}
        helperText={errors.data?.email?.message}
      />

      <TextField
        id="standard-basic"
        placeholder="Телефон"
        variant="standard"
        className="order-photo-form__input"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        type="number"
        {...register("data.phone", { required: "Pnone number is required" })}
        error={!!errors.data?.phone}
        helperText={errors.data?.phone?.message}
      />

      <div className="order-photo-form__type-wrapper" ref={popupRef}>
        <TextField
          id="standard-basic"
          placeholder="Тип"
          value={typeValue}
          variant="standard"
          className="order-photo-form__input"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...register("data.kind", { required: "Type is required" })}
          error={!!errors.data?.kind}
          helperText={errors.data?.kind?.message}
        />
        <img
          src={InputArrow}
          alt="arrow"
          className=""
          onClick={() => setIsActive(!isActive)}
        />
        {isActive && <OrderPhotoPopup handlChange={handleGetTypeValue}/>}
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
            helperText={errors.data?.date?.message}
          />
        </div>
        <div className="order-photo-form__date-time">
          <img src={clock} alt="clock" onClick={() =>showTimePicker(!timePicker)}/>
          <TextField
            id="standard-basic"
            placeholder="Время"
            value={selectedTime}
            variant="standard"
            className="order-photo-form__input"
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            type="text"
            {...register("data.time", { required: "Time is required" })}
            error={!!errors.data?.time}
            helperText={errors.data?.time?.message}
          />
          {timePicker &&  <TimePicker
            onChange={handleTimeChange}
            value={selectedTime}
            format="HH:mm"
            className="order-photo-form__date-time-picker"
          />}
         
        </div>
      </div>

      <TextField
        id="standard-basic"
        placeholder="Продолжительность фотосессии"
        variant="standard"
        className="order-photo-form__input"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        type="text"
        {...register("data.length", { required: "Length information is required" })}
        error={!!errors.data?.length}
        helperText={errors.data?.length?.message}
      />
      <TextField
        id="standard-basic"
        placeholder={freeOrderTextPlaceholder}
        variant="standard"
        className="order-photo-form__input order-photo-form__input-free-text"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        type="text"
        multiline
        {...register("data.text", {})}
        />
      <Booking handleSubmit={handleSubmit} />
    </form>
  );
};

export default OrderPhotoForm;
