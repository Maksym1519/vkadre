import "../Cabinet.scss";
import SubTitle from "components/ui/forms/SubTitle";
import LastedPhotoItem from "./LastedPhotoItem";


const LastedPhoto = () => {
    return ( 
        <>
        <div className="future-photo">
          <SubTitle text="Прошедшие фотосессии"/>
           <LastedPhotoItem />
        </div>
        </>
     );
}
 
export default LastedPhoto;