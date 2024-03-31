import "./OurTeam.scss";
import { useAppSelector } from "store/hooks";
import Title from "components/ui/forms/Title";
import HomeOrderSlider from "../Home/HomeOrderPhotosession/HomeOrderSlider";


const OurTeamHero = () => {
  const reduxData = useAppSelector((state) => state.ourTeam.ourTeam);
  const avatar = reduxData?.attributes?.avatar?.data?.attributes?.url;
  const sliderImages = reduxData && reduxData.attributes.photo.data
  

  return (
    <>
      <div className="our-team-hero__image">
        <img src={avatar ? avatar : ""} alt="avatar" />
      </div>
      <div className="our-team-hero__content">
        <Title text={reduxData && reduxData.attributes.fullName} />
        <p className="our-team-hero__position">{reduxData && reduxData.attributes.position}</p>
        <p className="our-team-hero__description our-team-hero__description_margin">
          {reduxData && reduxData.attributes.description1}
        </p>
        <p className="our-team-hero__description">
          {reduxData && reduxData.attributes.description2}
        </p>
        <HomeOrderSlider sliderImages={sliderImages && sliderImages}/>
       </div>
    </>
  );
};

export default OurTeamHero;
