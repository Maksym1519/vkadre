import "./OurWorks.scss";
import Portfolio from "components/common/Main/Portfolio";
import { useAppSelector } from "store/hooks";

const OurWorks = () => {
const reduxData = useAppSelector((state) => state.portfolio.portfolio);

const blur1: string  = reduxData && reduxData[0].attributes.blur1.data.attributes.url;
const blur2: string = reduxData && reduxData[0].attributes.blur2.data.attributes.url;
console.log(blur1)
    return (
        <div className="our-works">
           <h3 className="our-works__title">наши работы</h3>
           <div className="portfolio">
               <Portfolio />
           </div>
           <img src={blur1} alt="blur-right" className="our-works__blur-right"/>
           <img src={blur2 && blur2} alt="blur-right"  className="our-works__blur-left"/>
        </div>
    )
}
export default OurWorks;