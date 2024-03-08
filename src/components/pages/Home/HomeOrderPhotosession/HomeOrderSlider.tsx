import "./HomeOrderSlider.scss";
import { useAppSelector } from "../../../../store/hooks";

//my-Swiper-----------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HomeOrderSlider = () => {
  const reduxData = useAppSelector(
    (state) => state.orderPhotosession.orderPhotosession
  );
  const sliderImages =
    reduxData && reduxData[0].attributes.orderPhotosessionSlider.data;

  return (
    <div className="homeOrderSlider">

      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1430: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1240: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        }}
        >
        {sliderImages &&
          sliderImages.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <img src={item.attributes.url} alt={`image`} />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="buttons-navigation">
        <div className="button-swiper">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      
    </div>
  );
};
export default HomeOrderSlider;
