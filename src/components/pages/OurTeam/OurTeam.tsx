import "./OurTeam.scss";
import OurTeamHero from "./OurTeamHero";
import OrderPhoto from "components/common/Portfolio/OrderPhoto";
import OurTeamGallery from "./OurTeamGallery";

const OurTeam = () => {
  return (
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
    </div>
  );
};

export default OurTeam;
