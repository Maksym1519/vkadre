import "./ExpressPhotosession.scss";
import { useForm } from "react-hook-form";
import { userData } from "hooks/localStorageData";
import { ExpressPhotoType } from "types/expressPhoto/expressPhotoType";
import { expressPhotoPost } from "store/slices/expressPhoto/expressPhotoPost";
import ExpressNavigation from "./ExpressNavigation";
import Title from "components/ui/forms/Title";
import Button from "components/ui/buttons/Button";
import ExpressData from "./ExpressData";
import ExpressPayment from "./step2/ExpressPayment";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { useEffect } from "react";
import { setPage } from "store/slices/modals/expressPhotosession/expressPhotosessionSlice";
import blur from "@img/blur.webp";

const ExpressPhotosession = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.expressPhoto.page);
  const setNextPage = () => {
    dispatch(setPage(2));
  };

  //useForm-------------------------------------------------
  const form = useForm<ExpressPhotoType>({});
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  //curent-data-----------------------------------
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const fullYear = currentDate.getFullYear();
  const formatedDate = `${day}.${month}.${fullYear}`;

  //get-userId-local-storage---------------------------
  const totalSum = useAppSelector((state) => state.expressPhoto.data.sum);
  const userId = userData();

  useEffect(() => {
    if (userId) {
      form.setValue("data.userId", userId.id);
      form.setValue("data.sum", totalSum);
      form.setValue("data.date", formatedDate)
    }
  }, [userId, form]);

  return (
    <form onSubmit={handleSubmit(expressPhotoPost())}>
      <div className="express-photosession">
        <div className="express-photosession__body">
          <ExpressNavigation />
          <div
            className="express-photosession-title"
            onClick={() => dispatch(setPage(1))}
          >
            <Title text="16 марта: парк «тараса шевченка». Цветение магнолий" />
          </div>
          <main className="express-photosession-content">
            {currentPage === 1 && <ExpressData />}
            {currentPage === 2 && (
              <ExpressPayment
                register={register}
                errors={errors}
                handleSubmit={handleSubmit}
              />
            )}
          </main>
          {currentPage === 1 && (
            <div
              className="express-photosession__button-next"
              onClick={() => {
                setNextPage();
              }}
            >
              <Button text="Далее" />
            </div>
          )}
          {currentPage === 2 && (
            <div className="express-photosession__button-wrapper">
              <div
                className="express-photosession__button-back"
                onClick={() => dispatch(setPage(1))}
              >
                <Button text="Вернуться назад" />
              </div>
              <div className="express-photosession__button-order">
                <Button text="Заказать Экспресс-фотосессию" type="submit" />
              </div>
            </div>
          )}

          <img src={blur} alt="blur" className="express-photosession__blur" />
        </div>
      </div>
      <button type="submit">send</button>
    </form>
  );
};

export default ExpressPhotosession;
