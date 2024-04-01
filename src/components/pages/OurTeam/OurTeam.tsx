import "./OurTeam.scss";
import OurTeamHero from "./OurTeamHero";
import OrderPhoto from "components/common/Portfolio/OrderPhoto";
import OurTeamGallery from "./OurTeamGallery";
import Blur from "@img/blur.webp";
import { useEffect, useState, CSSProperties } from "react";
import { useAppSelector } from "store/hooks";
import GridLoader from "react-spinners/ClipLoader";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "rgb 23 26 32",
    width: "1OOvw",
    height: "100vh",
    background: "#fff",
  };

  const reduxData = useAppSelector((state) => state.ourTeam.ourTeam);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    if (reduxData && reduxData !== null) {
      setLoading(false);
    }
  }, [reduxData]);

  return (
    <>
      {loading && (
        <GridLoader
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {!loading && (
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
          <img src={Blur} alt="blur" className="our-team__blur-right" />
          <img src={Blur} alt="blur" className="our-team__blur-left" />
        </div>
      )}
    </>
  );
};

export default OurTeam;
