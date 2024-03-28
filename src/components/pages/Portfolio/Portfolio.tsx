import "./Portfolio.scss";
import Title from "components/ui/forms/Title";
import PortfolioNavigation from "./PortfolioNavigation";
import PortfolioItem from "components/common/Main/PortfolioItem";
import { useAppSelector } from "store/hooks";

const PortfolioPage = () => {
  const reduxData = useAppSelector((state) => state.portfolio.portfolio);
  const gallery: Array<string> | null =
    reduxData &&
    reduxData.map((item) => item.attributes.photo.data.attributes.url);

  const allGallery: string[] = gallery ? [...gallery] : [];
  allGallery?.sort((a: string | null, b: string | null) => {
    if (a && b) {
      return b.length - a.length;
    }
    return 0;
  });

  const expressGallery: string[] = gallery ? [...gallery] : [];
  

  //get-active-portfolio-index--------------------------------
  const portfolioIndex = useAppSelector(
    (state) => state.portfolioPage.activeIndex
  );

  return (
    <div className="portfolio">
      <Title text="Портфолио" />
      <h4 className="portfolio__subtitle">
        За 3 года работы мы организовали более 10 000 фотосессий в Одессе
      </h4>
      <PortfolioNavigation />
      {portfolioIndex === 0 && (
        <section className="portfolio-content">
          <PortfolioItem images={gallery} />
          <PortfolioItem images={allGallery} />
        </section>
      )}
    </div>
  );
};
export default PortfolioPage;
