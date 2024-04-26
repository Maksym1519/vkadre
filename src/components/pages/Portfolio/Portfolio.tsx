import "./Portfolio.scss";
import { useEffect, useState } from "react";
import Title from "components/ui/forms/Title";
import PortfolioNavigation from "./PortfolioNavigation";
import PortfolioItem from "components/common/Main/PortfolioItem";
import OrderPhoto from "components/common/Portfolio/OrderPhoto";
import Blur from "@img/blur.webp";
import { useAppSelector } from "store/hooks";
import Loading from "components/common/Loading/Loading";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  expressGallery.reverse();

  let individualGallery: string[] = gallery ? [...gallery] : [];
  individualGallery = allGallery
    .filter((_, index) => index % 2 === 0)
    .concat(allGallery.filter((_, index) => index % 2 !== 0));

  //get-active-portfolio-index--------------------------------
  const portfolioIndex = useAppSelector(
    (state) => state.portfolioPage.activeIndex
  );
  //-----------------------------------------------------------
  const contentArray = [
    <section className="portfolio-content">
      <PortfolioItem images={gallery} />
      <PortfolioItem images={allGallery} />
    </section>,
    <section className="portfolio-content">
      <PortfolioItem images={expressGallery} />
      <PortfolioItem images={allGallery} />
    </section>,
    <section className="portfolio-content">
      <PortfolioItem images={individualGallery} />
      <PortfolioItem images={allGallery} />
    </section>,
    <section className="portfolio-content">
      <PortfolioItem images={gallery} />
      <PortfolioItem images={allGallery} />
    </section>,
    <section className="portfolio-content">
      <PortfolioItem images={expressGallery} />
      <PortfolioItem images={allGallery} />
    </section>,
    <section className="portfolio-content">
      <PortfolioItem images={individualGallery} />
      <PortfolioItem images={allGallery} />
    </section>,
  ];
  const activeContent = contentArray[portfolioIndex];

  //-----------------------------------------------------------
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (reduxData && reduxData !== null) {
      setLoading(true);
    }
  }, [reduxData]);

  return (
    <>
      {!loading && <Loading />}
      {loading && (
        <div className="portfolio">
          <Title text="Портфолио" />

          <h4 className="portfolio__subtitle">
            За 3 года работы мы организовали более 10 000 фотосессий в Одессе
          </h4>

          <PortfolioNavigation />
          {activeContent}
          <div className="portfolio-order-photo"></div>
          <OrderPhoto />

          <img src={Blur} alt="blur" className="portfolio__blur" />
        </div>
      )}
    </>
  );
};
export default PortfolioPage;
