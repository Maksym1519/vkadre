import "../Cabinet.scss";
import { useEffect, useState } from "react";
import SubTitle from "components/ui/forms/SubTitle";
import FuturePhotoItem from "./FuturePhotoItem";
import Plus from "@img/plus.svg";
import Minus from "@img/minus.svg";
import { useMatchMedia } from "hooks/use-match-media";



const FuturePhoto = () => {
  //widthScreen-------------------------------------
  const screenWidth = useMatchMedia()

  //show/hide-content-mobile-screen------------------------------------
  const [showComponent, setShowComponent] = useState<boolean>(false);
  useEffect(() => {
    if(!screenWidth.isMobile) {
      setShowComponent(true)
    }
  },[])
 
  return (
    <>
      <div className="future-photo">
        <div className="my-data__title" onClick={() => setShowComponent(!showComponent)}>
          <SubTitle text="Предстоящие фотосессии" />
          {screenWidth.isMobile && <img src={showComponent ? Minus : Plus} alt="icon"/>}
        </div>
        {showComponent && <FuturePhotoItem />}
        
      </div>
    </>
  );
};

export default FuturePhoto;
