import { Dish } from "./Dish";
import { DishCounter } from "../Dish-counter/Dish-counter";
import { AuthContext } from "../Auth-context/Auth-context";
import { use } from "react";
import style from "./Dish.module.css";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

export const DishContainer = ({ dishId }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;

    const { data, isLoading } = useGetDishesByRestaurantIdQuery(dishId);

    if (isLoading) {
        return "Loading...";
    }

    if (!data) {
        return null;
    }

    return (
        <div className={style.root}>
            <Dish data={data} isAuthorized={isAuthorized} />
        </div>
    );
};
