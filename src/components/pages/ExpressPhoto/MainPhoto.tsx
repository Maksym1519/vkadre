import "./ExpressPhotosession.scss";
import { useAppSelector } from "store/hooks";

const MainPhoto = () => {
  const reduxData = useAppSelector(
    (state) => state.orderPhotosession.orderPhotosession
  );

  return (
    <div className="express-photo-image">
      <img
        src={reduxData && reduxData[0].attributes.mainImage.data.attributes.url}
        alt="img"
      />
    </div>
  );
};

export default MainPhoto;
