import "./OurWorks.scss";
import Portfolio from "components/common/Main/Portfolio";

const OurWorks = () => {
    return (
        <div className="our-works">
           <h3 className="our-works__title">наши работы</h3>
           <div className="portfolio">
               <Portfolio />
           </div>
        </div>
    )
}
export default OurWorks;