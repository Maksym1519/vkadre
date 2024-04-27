import "./Services.scss";
import CardItem from "components/common/Main/CardItem";
import OrderPhoto from "components/common/Portfolio/OrderPhoto";
import OrderPhotosession from "components/common/Modal/OrderPhotosession/OrderPhotosession";
import Loading from "components/common/Loading/Loading";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { servicesInfo } from "store/slices/services/servicesSlice";
import { getServiceDetail } from "store/slices/services/serviceDetailSlice";
import { useMatchMedia } from "hooks/use-match-media";
import Button from "components/ui/buttons/Button";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Blur from "@img/blur.webp";

const Services: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(servicesInfo());
  }, [dispatch]);

  const reduxData = useAppSelector((state) => state.services.services);
  const arrayImages =
    reduxData &&
    reduxData
      .map((item) => item.attributes.image)
      .map((item) => item.data.attributes.url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //matchmedia----------------------------------------------------------
  const screenWidth = useMatchMedia();

  //show-more-images---------------------------------------------------
  const [showMore, setShowMore] = useState(false);

  //-----------------------------------------------------------
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (reduxData && reduxData !== null) {
      setLoading(true);
    }
  }, [reduxData]);

  const modalState = useAppSelector(
    (state) => state.orderPhotosessionModal.overlay
  );

  return (
    <>
      {!loading && <Loading />}
      {loading && (
        <div className="services">
          <div className="services__header">
            <h2 className="services__title">Услуги</h2>
            <h3 className="services__subitle">
              За 3 года работы мы организовали более 10 000 фотосессий в Одессе
            </h3>
          </div>
          <main>
            <section className="services-gallery">
              {reduxData &&
                reduxData
                  .slice(
                    0,
                    !showMore && screenWidth.isMobile ? 5 : reduxData.length
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        dispatch(getServiceDetail(item.attributes.title))
                      }
                    >
                      <NavLink to={"/ServiceDetail"}>
                        <CardItem
                          img={arrayImages && arrayImages[index]}
                          title={item.attributes.title}
                          description={item.attributes.description}
                          location=""
                        />
                      </NavLink>
                    </div>
                  ))}
              {screenWidth.isMobile ? (
                <div
                  className="services-gallery__button"
                  onClick={() => setShowMore(!showMore)}
                >
                  <Button
                    text={!showMore ? "Показать больше" : "Показать меньше"}
                  />
                </div>
              ) : (
                ""
              )}
            </section>
            <section className="services-order-photo">
              <OrderPhoto />
            </section>
          </main>
          <img src={Blur} alt="blur" className="services__blur-top" />
          <img src={Blur} alt="blur" className="services__blur-left" />
          <img src={Blur} alt="blur" className="services__blur-bottom" />

          {modalState && <OrderPhotosession />}
        </div>
      )}
    </>
  );
};

export default Services;
