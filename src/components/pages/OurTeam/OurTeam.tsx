import "./OurTeam.scss";
import OurTeamHero from "./OurTeamHero";
import OrderPhoto from "components/common/Portfolio/OrderPhoto";
import OurTeamGallery from "./OurTeamGallery";
import Blur from "@img/blur.webp";
import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import Loading from "components/common/Loading/Loading";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const reduxData = useAppSelector((state) => state.ourTeam.ourTeam);
  
  let [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (reduxData && reduxData !== null) {
      setLoading(true);
    }
  }, [reduxData]);

  return (
    <>
      {!loading && (
      <Loading />
      )}
      {loading && (
        <div className="our-team">
          <main>
            <section className="our-team-hero">
              <OurTeamHero />
            </section>
            <section className="our-team-gallery">
              <OurTeamGallery />
            </section>
            <section className="our-team-order-photo">
              <OrderPhoto />
            </section>
          </main>
          <img src={Blur} loading="lazy" alt="blur" className="our-team__blur-right" />
          <img src={Blur} loading="lazy" alt="blur" className="our-team__blur-left" />
        </div>
      )}
    </>
  );
};

export default OurTeam;
