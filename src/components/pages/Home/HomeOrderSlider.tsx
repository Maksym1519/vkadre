import "./HomeOrderSlider.scss";

//my-Swiper-----------------------------------------------------
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const HomeOrderSlider = () => {
    return (
        <div className="homeOrderSlider">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper>
        </div>
    )
}
export default HomeOrderSlider;