import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getLocationDetail } from "store/slices/location/locationDetailSlice";
import { locationsPageInfo } from "store/slices/location/locationPageSlice";
import "./Locations.scss";
import LocationsHeader from "./LocationsHeader";
import OrderPhotosession from "components/common/Modal/OrderPhotosession/OrderPhotosession";
import CardItem from "components/common/Main/CardItem";
import OrderPhoto from "components/common/Portfolio/OrderPhoto";
import Button from "components/ui/buttons/Button";
import { motion } from "framer-motion";
import Blur from "@img/blur.webp";

const Locations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const locations: Array<string> = [
    "Все",
    "Одесса",
    "Южный",
    "Черноморск",
    "Фотостудии",
  ];

  const dispatch = useAppDispatch();

  const [nameLocation, setNameLocation] = useState("Все");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    dispatch(locationsPageInfo(nameLocation));
  }, [nameLocation, dispatch]);

  const clickIndex = (index: number, e: any) => {
    setActiveIndex(index);
    setNameLocation(e.target.textContent);
  };

  //data-page--------------------------------------------------------------
  const reduxData = useAppSelector((state) => state.locations.locations);

  const newArray = reduxData?.concat(reduxData);
  const imagesArray =
    newArray &&
    newArray.map((item) => item?.attributes?.image?.data?.attributes?.url);

  //show-more/less-items-----------------------------------------------------
  const [showMore, setShowMore] = useState(false);

  const modalState = useAppSelector(
    (state) => state.orderPhotosessionModal.overlay
  );

  return (
    <div className="locations">
      <div className="locations-header">
        <LocationsHeader />
      </div>

      <div className="locations-navigation">
        {locations.map((item, index) => (
          <div
            className={
              activeIndex === index
                ? "locations-navigation__item"
                : "locations-navigation__item_passive"
            }
            key={index}
            onClick={(e) => {
              clickIndex(index, e);
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <section className="locations-gallery">
        <motion.div className="locations-gallery__items">
          {reduxData &&
            reduxData
              .slice(0, showMore ? reduxData.length : 9)
              .map((item, index) => (
                <div
                  onClick={() =>
                    dispatch(getLocationDetail(item.attributes.location))
                  }
                >
                  <NavLink to={"/LocationsDetail"}>
                    <CardItem
                      key={index}
                      img={imagesArray ? imagesArray[index] : ""}
                      title={"Название локации"}
                      location={item.attributes.location}
                      description={item.attributes.description}
                    />
                  </NavLink>
                </div>
              ))}
        </motion.div>

        <div
          className="locations-gallery__button"
          onClick={() => setShowMore(!showMore)}
        >
          <Button text={showMore ? "Показать меньше" : "Загрузить еще"} />
        </div>
      </section>

      <section className="locations-order-photo">
        <OrderPhoto />
      </section>

      <img src={Blur} loading="lazy" alt="blur" className="locations__blur-top" />
      <img src={Blur} loading="lazy" alt="blur" className="locations__blur-left" />
      <img src={Blur} loading="lazy" alt="blur" className="locations__blur-right" />

      {modalState && <OrderPhotosession />}
    </div>
  );
};

export default Locations;
