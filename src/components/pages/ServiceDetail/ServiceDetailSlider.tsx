import "./ServiceDetail.scss";
//my-Swiper-----------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


type PropsType = {
    images: Array<string> | null
}
const ServiceDetailSlider = (props: PropsType) => {
    
  return (
    <>
      <div>
        <Swiper
          className="service-detail-slider"
          breakpoints={{
            280: {
              slidesPerView: "auto",
              spaceBetween: 16,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 16,
            },
          }}
          loop={false}
        >
          {props.images &&
            props.images.map((item, index) => (
              <SwiperSlide className="service-detail-slider__slide" key={index}>
                <img src={item} alt="img" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default ServiceDetailSlider;
