import "./Services.scss";
import CardItem from "components/common/Main/CardItem";
import OrderPhoto from "components/common/Portfolio/OrderPhoto";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { servicesInfo } from "store/slices/services/servicesSlice";
import { getServiceDetail } from "store/slices/services/serviceDetailSlice";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Blur from "@img/blur.webp";

const Services = () => {
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
        window.scrollTo(0, 0)
        },[])

  return (
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
            reduxData.map((item, index) => (
              <div
                key={index}
                onClick={() => dispatch(getServiceDetail(item.attributes.title))}
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
        </section>
        <section className="services-order-photo">
          <OrderPhoto />
        </section>
      </main>
      <img src={Blur} alt="blur" className="services__blur-top" />
      <img src={Blur} alt="blur" className="services__blur-left" />
      <img src={Blur} alt="blur" className="services__blur-bottom" />
    </div>
  );
};

export default Services;
