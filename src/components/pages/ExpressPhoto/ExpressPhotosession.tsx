import "./ExpressPhotosession.scss";
import ExpressNavigation from "./ExpressNavigation";
import Title from "components/ui/forms/Title";
import Button from "components/ui/buttons/Button";
import ExpressData from "./ExpressData";
import ExpressPayment from "./step2/ExpressPayment";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { setPage } from "store/slices/modals/expressPhotosession/expressPhotosessionSlice";
import blur from "@img/blur.webp";

const ExpressPhotosession = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.expressPhoto.page);
  const setNextPage = () => {
    dispatch(setPage(2));
  };
 

  return (
    <div className="express-photosession">
      <div className="express-photosession__body">
        <ExpressNavigation />

        <div className="express-photosession-title" onClick={() => dispatch(setPage(1))}>
          <Title text="16 марта: парк «тараса шевченка». Цветение магнолий" />
        </div>
        <main className="express-photosession-content">
          {currentPage === 1 && <ExpressData />}
          {currentPage === 2 && <ExpressPayment />}
        </main>
        {currentPage === 1 && (
          <div
            className="express-photosession__button"
            onClick={() => {setNextPage()}}
          >
            <Button text="Далее" />
          </div>
        )}

        <img src={blur} alt="blur" className="express-photosession__blur" />
      </div>
    </div>
  );
};

export default ExpressPhotosession;
