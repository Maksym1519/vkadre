import "../Cabinet.scss";
import SubTitle from "components/ui/forms/SubTitle";
import LastedPhotoItem from "./LastedPhotoItem";
import Plus from "@img/plus.svg";
import Minus from "@img/minus.svg";
import { useMatchMedia } from "hooks/use-match-media";

const LastedPhoto = () => {
  //widthScreen-------------------------------------
  const screenWidth = useMatchMedia()
 
 
  return (
    <>
      <div className="future-photo">
      <div className="my-data__title">
        <SubTitle text="Прошедшие фотосессии" />
        {screenWidth && <img src={Plus} alt="icon"/>}
        </div>
        <LastedPhotoItem />
      </div>
    </>
  );
};

export default LastedPhoto;
