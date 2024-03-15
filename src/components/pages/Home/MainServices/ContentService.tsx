import "./MainServices.scss";
import { useAppSelector } from "store/hooks";
import SubTitle from "components/ui/forms/SubTitle";


const ContentService = () => {
  const reduxData = useAppSelector((state) => state.mainServices.mainServices);
  const reduxIndex = useAppSelector((state) => state.mainServices.index)
 
  const array = reduxData
    ?.flatMap((item) => item.attributes.serviceNavigation)
    ?.flatMap((item) => item.children)
    ?.map((item) => item.text);

    const subTitle = array && array[reduxIndex];

    return (
        <div className="content-service">
    {subTitle && <SubTitle text={subTitle}/>}
        </div>
    )
}
export default ContentService;