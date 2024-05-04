import "./HomeOrderPhotosession.scss";
import Button from "../../../ui/buttons/Button";
import HomeOrderSlider from "./HomeOrderSlider";
import { useAppSelector } from "store/hooks";
import { useMatchMedia } from "hooks/use-match-media";
import blur from "@img/blur.webp"

const HomeOrderPhotosession = () => {
  const reduxData = useAppSelector(
    (state) => state.orderPhotosession.orderPhotosession
  );

  //get-images-from-redux-for-slider--------------------------------------------
  const reduxSliderImages = useAppSelector(
    (state) => state.orderPhotosession.orderPhotosession
  );
  const sliderImages =
    reduxSliderImages &&
    reduxSliderImages[0].attributes.orderPhotosessionSlider.data;

  //matchmedia---------------------------------------------
  const screenWidth = useMatchMedia();

  const handleClick = () => {
    window.location.href = '/ExpressPhoto';
  };
  
  return (
    <div className="home-order">
      <div className="home-order__image">
        <img
          src={
            reduxData && reduxData[0].attributes.mainImage.data.attributes.url
          }
          alt="mainImg"
        />
      </div>

      <div className="home-order__description">
        <h2 className="home-order__title">
          {reduxData && reduxData[0].attributes.mainTitle}
        </h2>

        <div className="features">
          <div className="features__item">
            <span className="features__item-title">10 мин - 10 фото</span>
            <span className="features__item-bottom">990 ГРН.</span>
          </div>

          <div className="features__item">
            <span className="features__item-title">20 мин - 20 фото</span>
            <span className="features__item-bottom">1990 ГРН.</span>
          </div>

          <div className="features__item">
            <span className="features__item-bottom">
              Готовые фото на следующий день
            </span>
          </div>
        </div>

        <div className="home-order__button-wrapper" onClick={() => handleClick()}>
          <Button
            maxWidth="366px"
            text={
              screenWidth.isMobile
                ? "Заказать фотосессию"
                : "Заказать Экспресс-фотосессию"
            }
          />
        </div>

        <HomeOrderSlider sliderImages={sliderImages} />
      </div>
      <img
        src={blur}
        loading="lazy"
        alt="blur"
        className="home-order__blur"
      />
    </div>
  );
};
export default HomeOrderPhotosession;
