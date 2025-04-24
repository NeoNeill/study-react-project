import { Dish } from "./Dish";
import { DishCounter } from "../Dish-counter/Dish-counter";
import { AuthContext } from "../Auth-context/Auth-context";
import { use } from "react";
import style from "./Dish.module.css";

export const DishContainer = ({ dish }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;
    const { name, price, id, ingredients } = dish || {};
    return (
        <div className={style.root}>
            <Dish name={name} price={price} ingredients={ingredients} />
            {isAuthorized ? <DishCounter id={id} /> : null}
        </div>
    );
};
