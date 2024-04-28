import "./Header.scss";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getBurgerInfo } from "../../../store/slices/headerSlice";

const Burger = () => {
const dispatch = useAppDispatch();

const burgerRedux = useAppSelector((state) => state.header.burger)

const [stateBurger, setStateBurger] = useState(false);
const clickBurger = () => {
setStateBurger(!stateBurger)
dispatch(getBurgerInfo(!stateBurger))
}

useEffect(() => {
setStateBurger(burgerRedux)
},[burgerRedux])



    return (
        <div className="burger" onClick={clickBurger}>
            <div className={stateBurger ? "burger--upperLine" : "burger-line"}></div>
            <div className={stateBurger ? "burger--middleLine" : "burger-line"}></div>
            <div className={stateBurger ? "burger--lowerLine" : "burger-line"}></div>
        </div>
    )
}
export default Burger;