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
    <div className="homeOrderPhotosession">
      <div className="mainImage">
        <img src={reduxData && reduxData[0].attributes.mainImage.data.attributes.url} alt="mainImg" />
      </div>

      <div className="orderPhotoSession-description">
        <h2 className="orderPhotoSession-description__title">{reduxData && reduxData[0].attributes.mainTitle}</h2>

        <div className="description-terms">
          <div className="description-terms__item">
            <span className="terms__item__light">10 мин - 10 фото</span>
            <span className="terms__item__bold">990 ГРН.</span>
          </div>

          <div className="description-terms__item">
            <span className="terms__item__light">20 мин - 20 фото</span>
            <span className="terms__item__bold">1990 ГРН.</span>
          </div>

          <div className="description-terms__item">
            <span className="terms__item__bold">Готовые фото на следующий день</span>
          </div>
        </div>

        <div className="orderPhotoSession-description__buttonWrapper">
          <Button maxWidth="366px" text="Заказать Экспресс-фотосессию" />
        </div>

        <HomeOrderSlider />
      </div>
      <img src={reduxData && reduxData[0].attributes.blur.data.attributes.url} alt="blur" className="blur"/>
      </div>
  );
};
export default HomeOrderPhotosession;
