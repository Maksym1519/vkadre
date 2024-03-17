import "./MainServices.scss";
import { useAppSelector } from "store/hooks";
import SubTitle from "components/ui/forms/SubTitle";
import Price from "components/common/Main/Price";
 import Button from "components/ui/buttons/Button";

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

  return (
    <div className="content-service">
      {subTitle && <SubTitle text={subTitle} />}

      {arrayImages && subTitle && (
        <img
          src={arrayImages[reduxIndex]}
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

      <Price />
      
      <div className="content-service-button">
        <Button text="Заказать фотосессию" width="100%" />
      </div>
    </div>
  );
};
export default ContentService;
