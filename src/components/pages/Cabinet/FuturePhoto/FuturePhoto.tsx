import "../Cabinet.scss";
import SubTitle from "components/ui/forms/SubTitle";
import FuturePhotoItem from "./FuturePhotoItem";
import Plus from "@img/plus.svg";
import Minus from "@img/minus.svg";
import { useMatchMedia } from "hooks/use-match-media";



const FuturePhoto = ({showComponent, toggleComponent}: any) => {
  //widthScreen-------------------------------------
  const screenWidth = useMatchMedia()
 
  return (
    <>
      <div className="future-photo">
        <div className="my-data__title" onClick={toggleComponent}>
          <SubTitle text="Предстоящие фотосессии" />
          {screenWidth && <img src={showComponent ? Minus : Plus} alt="icon"/>}
        </div>
        {showComponent && <FuturePhotoItem />}
        
      </div>
    </>
  );
};

export default FuturePhoto;
