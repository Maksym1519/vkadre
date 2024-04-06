import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { locationsPageInfo } from "store/slices/location/locationPageSlice";
import "./Locations.scss";
import LocationsHeader from "./LocationsHeader";
import CardItem from "components/common/Main/CardItem";
import Button from "components/ui/buttons/Button";

const Locations = () => {
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
  const reduxData = useAppSelector(
    (state) => state.locations.locations
  );

  const newArray = reduxData?.concat(reduxData);
  const imagesArray =
  newArray &&
  newArray.map((item) => item?.attributes?.image?.data?.attributes?.url);

  //show-more/less-items-----------------------------------------------------
  const [showMore, setShowMore] = useState<Boolean>(false)
 

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
            onClick={(e) => {clickIndex(index, e)}}
          >
            {item}
          </div>
        ))}
      </div>

      <section className="locations-gallery">
        <div className="locations-gallery__items">
        {reduxData &&
          reduxData.slice(0, showMore ? reduxData.length : 9).map((item, index) => (
            <CardItem
              key={index}
              img={imagesArray ? imagesArray[index] : ""}
              title={"Название локации"}
              location={item.attributes.location}
              description={item.attributes.description}
            />
          ))}
          </div>

          <div className="locations-gallery__button" onClick={() => setShowMore(!showMore)}>
          <Button text={showMore ? "Показать меньше" : "Загрузить еще"}/>
          </div>
       </section>
    </div>
  );
};

export default Locations;
