import "./MainServices.scss";
import { useAppSelector, useAppDispatch } from "store/hooks";
import SubTitle from "components/ui/forms/SubTitle";
import Price from "components/common/Main/Price";
import Button from "components/ui/buttons/Button";
import { setOrderphoto } from "store/slices/modals/orderPhotosession/orderPhotosessionSlice";

const ContentService = () => {
  const reduxData = useAppSelector((state) => state.mainServices.mainServices);
  const reduxIndex = useAppSelector((state) => state.mainServices.index);

  const array = reduxData
    ?.flatMap((item) => item.attributes.serviceNavigation)
    ?.flatMap((item) => item.children)
    ?.map((item) => item.text);

  const subTitle = array && array[reduxIndex];

  const arrayImages =
    reduxData &&
    reduxData
      .flatMap((item) => item.attributes.image.data)
      ?.flatMap((item) => item.attributes)
      ?.map((item) => item.url);

  //set-modal-order-photo---------------------------
  const dispatch = useAppDispatch();
  const handleModalClick = () => {
    dispatch(setOrderphoto(true));
  };

  
  return (
    <div className="content-service">
      {subTitle && <SubTitle text={subTitle} />}
      <link
        rel="preload"
        as="image"
        href={arrayImages ? arrayImages[reduxIndex] : ""}
       />
      {arrayImages && subTitle && (
        <img
          src={arrayImages[reduxIndex]}
          loading="lazy"
          alt="image"
          className="content-service__image"
        />
      )}

      <div className="content-service__text content-service__text_margin">
        {reduxData && reduxData[0].attributes.text1}
      </div>
      <div className="content-service__text">
        {reduxData && reduxData[0].attributes.text2}
      </div>

      <Price button="" calendar="" />

      <div className="content-service-button" onClick={handleModalClick}>
        <Button text="Заказать фотосессию" />
      </div>

   </div>
  );
};
export default ContentService;
