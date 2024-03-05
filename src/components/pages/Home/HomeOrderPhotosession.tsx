import "./HomeOrderPhotosession.scss";
import Button from "../../ui/buttons/Button";

const HomeOrderPhotosession = () => {
  return (
    <div className="homeOrderPhotosession">
      <div className="mainImage">
        <img src="#" alt="mainImg" />
      </div>

      <div className="orderPhotoSession-description">
        <h2 className="orderPhotoSession-description__title"></h2>

        <div className="description-terms">
          <div className="description-terms__item">
            <span></span>
            <span></span>
          </div>

          <div className="description-terms__item">
            <span></span>
            <span></span>
          </div>

          <div className="description-terms__item">
            <span></span>
          </div>
        </div>

        <div className="orderPhotoSession-description__buttonWrapper">
          <Button maxWidth="366px" text="Заказать Экспресс-фотосессию" />
        </div>
      </div>
    </div>
  );
};
export default HomeOrderPhotosession;
