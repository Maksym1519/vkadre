import "./Locations.scss";
import Title from "components/ui/forms/Title";

const LocationsHeader = () => {
  return (
    <>
      <Title text={"Локации"} />
      <h3 className="locations-header__subtitle">
        За 3 года работы мы организовали более 10 000 фотосессий в Одесса
      </h3>
    </>
  );
};

export default LocationsHeader;
