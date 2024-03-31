import "./OurTeam.scss";
import Title from "components/ui/forms/Title";
import PortfolioItem from "components/common/Main/PortfolioItem";
import { useAppSelector } from "store/hooks";

const OurTeamGallery = () => {
  const reduxData = useAppSelector((state) => state.ourTeam.ourTeam);
  const sliderImages = reduxData && reduxData.attributes.photo.data.map((item) => item.attributes.url);


  return (
    <>
      <Title text="РАБОТЫ САШИ" />
      <PortfolioItem images={sliderImages}/>
    </>
  );
};

export default OurTeamGallery;
