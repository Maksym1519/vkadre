import "./Portfolio.scss";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useEffect } from "react";
import { portfolioInfo } from "store/slices/main/portfolioSlice";
import Button from "components/ui/buttons/Button";
//my-Swiper-----------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Portfolio = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(portfolioInfo());
  }, [dispatch]);

  const reduxData = useAppSelector((state) => state.portfolio.portfolio);
  const gallery =
    reduxData &&
    reduxData.map((item) => item.attributes.photo.data.attributes.url);

    const sliderIndex = [1, 2, 3];

  return (
    <div className="portfolio-wrapper">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="portfolio-slider"
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
      >
        {sliderIndex.map((index) => (
          <SwiperSlide className="portfolio-slider__slide" key={index}>
            <div className="portfolio-slider__item" >
              {gallery &&
                gallery.map((item, index) => (
                  <img
                    src={item}
                    alt="photo"
                    key={index}
                    className="portfolio-slider__item-image"
                  />
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="buttons-navigation">
        <Button text="Смотреть все Портфолио" maxWidth="300px" />
        <div className="button-swiper">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
