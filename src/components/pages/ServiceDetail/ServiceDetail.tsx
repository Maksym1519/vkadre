import "./ServiceDetail.scss";
import { useAppSelector } from "store/hooks";
import { useEffect } from "react";
import Title from "components/ui/forms/Title";
import Arrow from "@img/leftArrow.svg";
import PortfolioItem from "components/common/Main/PortfolioItem";
import ServiceDetailSlider from "./ServiceDetailSlider";
import ServiceDetailFooter from "./ServiceDetailFooter";
import { useMatchMedia } from "hooks/use-match-media";
import Blur from "@img/blur.webp";

const ServiceDetail = () => {
  const reduxData = useAppSelector((state) => state.serviceDetail.title);

  const galleryData = useAppSelector((state) => state.portfolio.portfolio);

  const gallery =
    galleryData &&
    galleryData.map((item) => item.attributes.photo.data.attributes.url);
  const screenWidth = useMatchMedia();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-detail">
      <div className="service-detail__header">
        <div
          className="service-detail__header-back"
          onClick={() => window.history.back()}
        >
          <img src={Arrow} alt="arrow" />
          <p>назад</p>
        </div>
        <Title text={reduxData} />
      </div>

      <section className="service-detail-gallery">
        {screenWidth.isDesktop && <PortfolioItem images={gallery} />}
        {screenWidth.isTablet && <PortfolioItem images={gallery} />}
        {screenWidth.isMobile && <ServiceDetailSlider images={gallery} />}
      </section>

      <section className="service-detail-footer">
        <ServiceDetailFooter />
      </section>
      
      <img src={Blur} alt="blur" className="service-detail__blur-top" />
    </div>
  );
};

export default ServiceDetail;
