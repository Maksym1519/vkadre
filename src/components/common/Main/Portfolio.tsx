import "./Portfolio.scss";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useEffect } from "react";
import { portfolioInfo } from "store/slices/main/portfolioSlice";
import Button from "components/ui/buttons/Button";
import PortfolioItem from "./PortfolioItem";
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

  const sliderIndex = [1, 2, 3];

  const reduxData = useAppSelector((state) => state.portfolio.portfolio);
  const gallery =
    reduxData &&
    reduxData.map((item) => item.attributes.photo.data.attributes.url);

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
            slidesPerView: 1,
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
            <PortfolioItem images={gallery} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="buttons-navigation">
        <div className="portfolio-button-wrapper">
          <NavLink to="/Portfolio">
            <Button text="Смотреть все Портфолио" width="100%" />
          </NavLink>
        </div>
        <div className="button-swiper">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
