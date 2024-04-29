import "./LocationDetail.scss";
import { useAppSelector } from "store/hooks";
import { useEffect } from "react";
import Title from "components/ui/forms/Title";
import MainLocations from "../Home/MainLocations/MainLocations";
import Arrow from "@img/leftArrow.svg";
import PortfolioItem from "components/common/Main/PortfolioItem";
import LocationDetailSlider from "./LocationDetailSlider";
import LocationDetailFooter from "./LocationDetailFooter";
import OrderPhoto from "components/common/Portfolio/OrderPhoto";
import OrderPhotosession from "components/common/Modal/OrderPhotosession/OrderPhotosession";
import { useMatchMedia } from "hooks/use-match-media";
import Blur from "@img/blur.webp";


const LocationDetail: React.FC = () => {
  const reduxData = useAppSelector((state) => state.locationDetail.title);
  
  const galleryData = useAppSelector((state) => state.portfolio.portfolio);
  
  const gallery =
    galleryData &&
    galleryData.map((item) => item.attributes.photo.data.attributes.url);

  const screenWidth = useMatchMedia();

  const modalState = useAppSelector(
    (state) => state.orderPhotosessionModal.overlay
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className="location-detail">
      <div className="location-detail__header">
        <div
          className="location-detail__header-back"
          onClick={() => window.history.back()}
        >
          <img src={Arrow} alt="arrow" />
          <p>назад</p>
        </div>
        <Title text={reduxData} />
      </div>

      <section className="location-detail-gallery">
        {screenWidth.isDesktop && <PortfolioItem images={gallery} />}
        {screenWidth.isTablet && <PortfolioItem images={gallery} />}
        {screenWidth.isMobile && <LocationDetailSlider images={gallery} />}
      </section>

      <section className="location-detail-footer">
        <LocationDetailFooter />
      </section>
      
      <section className="location-detail-another-locations">
         <MainLocations title="Другие локации"/>
      </section>

      <section className="location-detail-order-photo">
         <OrderPhoto />
      </section>
      <img src={Blur} loading="lazy" alt="blur" className="location-detail__blur-top" />

      {modalState && <OrderPhotosession />}
    </div>
  );
};

export default LocationDetail;
