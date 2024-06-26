import "./Feedback.scss";
import Title from "components/ui/forms/Title";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { feedBackInfo } from "store/slices/main/feedBackSlice";
import FeedbackSlide from "./FeedbackSlide";
import Button from "components/ui/buttons/Button";
import FeedbackModal from "components/common/Modal/Feedback/FeedbackModal";
import { setFeedbackModal } from "store/slices/modals/feedback/feedbackModalSlice";

//my-Swiper-----------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Feedback = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feedBackInfo());
  }, [dispatch]);

  const reduxData = useAppSelector((state) => state.feedback.feedback);

  //feedback-modal---------------------------------
  const feedbackModalWindow = useAppSelector((state) => state.feedbackModal.overlay)
  const showModal = () => {
    dispatch(setFeedbackModal(true))
  }

  return (
    <section className="feedback">
      <Title text="Отзывы клиентов" />

      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="feedback-slider"
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          1240: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
        }}
      >
        {reduxData &&
          reduxData.map((item, index) => (
            <SwiperSlide className="feedback-slider__slide" key={index}>
              <FeedbackSlide
                img={item.attributes.image.data.attributes.url}
                location={item.attributes.location}
                description={item.attributes.description}
                name={item.attributes.name}
                city={item.attributes.city}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="buttons-navigation">
        <div className="button-swiper">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <div className="buttons-navigation__button-wrapper" onClick={showModal}>
          <Button text="Оставить  отзыв" />
        </div>
      </div>
      {feedbackModalWindow && <FeedbackModal />}
    </section>
  );
};
export default Feedback;
