import "./MainOurTeam.scss";
import Title from "components/ui/forms/Title";
//my-Swiper-----------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MainOurTeam = () => {
  return (
    <div className="main-our-team">
      <Title text={"Наша команда"} />
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="our-team-slider"
          breakpoints={{
            280: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          <SwiperSlide className="our-team-slider__slide"></SwiperSlide>
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
export default MainOurTeam;
