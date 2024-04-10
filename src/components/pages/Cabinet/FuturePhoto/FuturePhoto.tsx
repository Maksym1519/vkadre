import "../Cabinet.scss";
import SubTitle from "components/ui/forms/SubTitle";
import FuturePhotoItem from "./FuturePhotoItem";


const FuturePhoto = () => {
    return ( 
        <>
        <div className="future-photo">
          <SubTitle text="Предстоящие фотосессии"/>
           <FuturePhotoItem />
        </div>
        </>
     );
}
 
export default FuturePhoto;