import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { mainLocationsInfo } from "store/slices/main/mainLocationsSlice";
import "./Locations.scss";
import LocationsHeader from "./LocationsHeader";
import CardItem from "components/common/Main/CardItem";

const Locations = () => {
  const locations: Array<string> = [
    "Все",
    "Одесса",
    "Южный",
    "Черноморск",
    "Фотостудии",
  ];

  //get-name-location--------------------------------------------
  const [nameLocation, setNameLocation] = useState("Все");
  const getNameLocation = (e: any) => {
    setNameLocation(e.target.textContent)
  }
  

  const [activeIndex, setActiveIndex] = useState(0);
  const clickIndex = (index: number) => {
    setActiveIndex(index);
  };

  //get-redux-data----------------------------------------------
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mainLocationsInfo(nameLocation));
  }, [dispatch]);

  const reduxData = useAppSelector(
    (state) => state.mainLocations.mainLocations
  );

  const newArray = reduxData?.concat(reduxData);
  const imagesArray =
  newArray &&
  newArray.map((item) => item.attributes.image.data.attributes.url);
  

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
            onClick={(e) => {clickIndex(index); getNameLocation(e)}}
          >
            {item}
          </div>
        ))}
      </div>

      <section className="locations-gallery">
        {reduxData &&
          reduxData.map((item, index) => (
            <CardItem
              key={index}
              img={imagesArray ? imagesArray[index] : ""}
              title="Одесса"
              location={item.attributes.location}
              description={item.attributes.description}
            />
          ))}
      </section>
    </div>
  );
};

export default Locations;
