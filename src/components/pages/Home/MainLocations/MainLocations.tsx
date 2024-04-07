import "./MainLocations.scss";
import Title from "components/ui/forms/Title";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { mainLocationsInfo } from "store/slices/main/mainLocationsSlice";
import Button from "components/ui/buttons/Button";
import CardItem from "components/common/Main/CardItem";
import Blur from "@img/blurLocation.webp"


//my-Swiper-----------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type PropsType = {
  title: string
}

const MainLocations = (props: PropsType) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mainLocationsInfo());
  }, [dispatch]);

  const reduxData = useAppSelector(
    (state) => state.mainLocations.mainLocations
  );

 
  const newArray = reduxData?.concat(reduxData);
  const imagesArray =
  newArray &&
  newArray.map((item) => item.attributes.image.data.attributes.url);

  return (
    <div className="main-locations">
      <Title text={props.title ? props.title : reduxData && reduxData[0].attributes.title} />
      <div className="locations-slider-wrapper">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="locations-slider"
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
          {newArray &&
            newArray.map((item, index) => (
              <SwiperSlide className="locations-slider__slide" key={index}>
                <CardItem
                  img={imagesArray ? imagesArray[index] : ""}
                  title="улица Дерибасовская"
                  location={item.attributes.location}
                  description={item.attributes.description}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="buttons-navigation">
          <div className="portfolio-button-wrapper">
            <Button text="Смотреть все локации" width="100%" />
          </div>
          <div className="button-swiper">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
       <img src={Blur} alt="blur" className="location-blur"/>
    </div>
  );
};
export default MainLocations;
