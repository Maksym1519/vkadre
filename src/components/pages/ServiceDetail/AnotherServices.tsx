import "./ServiceDetail.scss";
import Title from "components/ui/forms/Title";
import Button from "components/ui/buttons/Button";
import { useEffect, useState, useRef } from "react";
import { anotherServicesInfo } from "store/slices/services/anotherServicesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useMatchMedia } from "hooks/use-match-media";
import Blur from "@img/blur.webp";

const AnotherServices = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(anotherServicesInfo());
  }, []);

  const reduxData = useAppSelector(
    (state) => state.anotherService.anotherServices
  );
  const imagesArray =
    reduxData &&
    reduxData.map((item) => item.attributes.image.data.attributes.url);

  //show-all----------------------------------------------------
  const [showAll, setShowAll] = useState(false);

  const gridRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!showAll && gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showAll]);
  //useMatchMedia----------------------------------------------
  const screenWidth = useMatchMedia();

  return (
    <>
      <Title text="Другие услуги" />
      <div className="service-detail-another-services__grid" ref={gridRef}>
        {reduxData &&
          reduxData
            .slice(0, !showAll && screenWidth.isMobile ? 5 : reduxData.length)
            .map((item, index) => (
              <div
                className="service-detail-another-services__grid-item"
                key={index}
              >
                <img src={imagesArray ? imagesArray[index] : ""} alt="icon" />
                <p>{item?.attributes?.text}</p>
              </div>
            ))}
      </div>
      {screenWidth.isMobile ? (
        <div
          className="service-detail-another-services__button"
          onClick={() => setShowAll(!showAll)}
        >
          <Button text={!showAll ? "Посмотреть все" : "Показать меньше"} />
        </div>
      ) : (
        ""
      )}

      <img
        src={Blur}
        loading="lazy"
        alt="blur"
        className="service-detail-another-services__blur"
      />
    </>
  );
};

export default AnotherServices;
