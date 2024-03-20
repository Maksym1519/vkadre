import "./HomeOrderPhotosession.scss";
import Button from "../../../ui/buttons/Button";
import HomeOrderSlider from "./HomeOrderSlider";
import { orderPhotosessionInfo } from "../../../../store/slices/main/orderPhotosessionSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";


const HomeOrderPhotosession = () => {
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(orderPhotosessionInfo())
}, [dispatch]);

const reduxData = useAppSelector((state) => state.orderPhotosession.orderPhotosession)


  return (
    <div className="home-order">
      <div className="home-order__image">
        <img src={reduxData && reduxData[0].attributes.mainImage.data.attributes.url} alt="mainImg" />
      </div>

      <div className="home-order__description">
        <h2 className="home-order__title">{reduxData && reduxData[0].attributes.mainTitle}</h2>

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
            <span className="features__item-bottom">Готовые фото на следующий день</span>
          </div>
        </div>

        <div className="home-order__button-wrapper">
          <Button maxWidth="366px" text="Заказать Экспресс-фотосессию" />
        </div>

        <HomeOrderSlider />
      </div>
      <img src={reduxData && reduxData[0].attributes.blur.data.attributes.url} alt="blur" className="home-order__blur"/>
      {/* <div className="home-order__blur"></div> */}
      </div>
  );
};
export default HomeOrderPhotosession;
