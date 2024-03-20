import "./MainOurTeam.scss";
import Title from "components/ui/forms/Title";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { mainTeamInfo } from "store/slices/main/mainOurTeamSlice";
import OurTeamCard from "components/common/Main/OurTeamCard";
import Blur from "@img/blurTeam.webp";
//my-Swiper-----------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MainOurTeam = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mainTeamInfo());
  }, [dispatch]);

  const reduxData = useAppSelector((state) => state.mainTeam.mainTeam);
  const newArray = reduxData?.concat(reduxData);
  const imagesArray =
    newArray &&
    newArray.map((item) => item.attributes.image.data.attributes.url);

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
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
        >
          {newArray &&
            newArray.map((item, index) => (
              <SwiperSlide className="our-team-slider__slide" key={index}>
                <OurTeamCard
                  img={imagesArray ? imagesArray[index] : ""}
                  name={item.attributes.name}
                  position={item.attributes.position}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="buttons-navigation">
          <div className="button-swiper">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
       <img src={Blur} alt="blur" className="main-our-team__blur" />
    </div>
  );
};
export default MainOurTeam;