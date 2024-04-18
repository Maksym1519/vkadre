import "./FeedbackModal.scss";
import { useAppDispatch } from "store/hooks";
import { setFeedbackModal } from "store/slices/modals/feedback/feedbackModalSlice";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { FeedbackPostType } from "types/modals/modals";
import { feedbackPost } from "store/slices/modals/feedback/feedbackPost";
import LocationPopup from "./LocationPopup";
import PlacesPopup from "./PlacesPopup";
import clickOutside from "hooks/clickOutside";
import Title from "components/ui/forms/Title";
import Button from "components/ui/buttons/Button";
import close from "@img/cross.svg";
import arrow from "@img/inputArrow.svg";
import { useState, useRef } from "react";

const FeedbackModal = () => {
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(setFeedbackModal(false));
  };

  //useForm-------------------------------------------------
  const form = useForm<FeedbackPostType>({});
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  //location-popup-----------------------------------------
  const [locationsActive, setLocationsActive] = useState<boolean>(false);
  const [placesActive, setPlacesActive] = useState<boolean>(false);
  const locationRef = useRef<HTMLDivElement>(null);
  clickOutside(locationRef, () => setLocationsActive(false));
  const placesRef = useRef<HTMLDivElement>(null);
  clickOutside(placesRef, () => setPlacesActive(false));

  //get-value-from-input-------------------------------------
  const [locationValue, setLocationValue] = useState<string | undefined>();
  const [placesValue, setPlacesValue] = useState<string | undefined>();
  

  const getLocationValue = (e: string) => {
   setLocationValue(e)
  }
  const getPlacesValue = (e: string) => {
   setPlacesValue(e)
  }

 
  return (
    <div className="feedback-modal">
      <div className="feedback-modal__body">
        <Title text="Напишите отзыв" />

        <form className="feedback-form" onSubmit={handleSubmit(feedbackPost())}>
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
          <div className="feedback-form__location" ref={locationRef}>
            <TextField
              id="standard-basic"
              placeholder="Откуда вы ?"
              value={locationValue}
              variant="standard"
              className="order-photo-form__input"
              style={{ minWidth: "100%", textTransform: "uppercase" }}
              type="text"
              {...register("data.location", {
                required: "City is required",
              })}
              error={!!errors.data?.location}
              helperText={errors.data?.location?.message}
            />
            <img
              src={arrow}
              alt="arrow"
              onClick={() => setLocationsActive(!locationsActive)}
            />
            {locationsActive && <LocationPopup getLocationValue = {getLocationValue}/>}
          </div>
          <div className="feedback-form__places" ref={placesRef}>
            <TextField
              id="standard-basic"
              placeholder="Локация"
              value={placesValue}
              variant="standard"
              className="order-photo-form__input"
              style={{ minWidth: "100%", textTransform: "uppercase" }}
              type="text"
              {...register("data.city", {
                required: "Location is required",
              })}
              error={!!errors.data?.city}
              helperText={errors.data?.city?.message}
            />
            <img
              src={arrow}
              alt="arrow"
              onClick={() => setPlacesActive(!placesActive)}
            />
            {placesActive && <PlacesPopup getPlacesValue = {getPlacesValue}/>}
          </div>
          <div className="feedback-form__text">
            <TextField
              id="standard-basic"
              placeholder="Напишите отзыв"
              variant="standard"
              className="order-photo-form__input"
              style={{ minWidth: "100%", textTransform: "uppercase" }}
              type="text"
              multiline
              {...register("data.text", {
                required: "Feedback is required",
              })}
              error={!!errors.data?.text}
              helperText={errors.data?.text?.message}
            />
          </div>

          <div className="feedback-form__button">
            <Button text="Оставить отзыв" type="submit"/>
          </div>
        </form>

        <img
          src={close}
          alt="close"
          className="feedback-modal__close"
          onClick={closeModal}
        />
      </div>
    </div>
  );
};

export default FeedbackModal;
