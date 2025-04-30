import { Dish } from "./Dish";
import { AuthContext } from "../Auth-context/Auth-context";
import { use } from "react";
import style from "./Dish.module.css";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const DishContainer = ({ dishId }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;

    const { data, isLoading } = useGetDishByIdQuery(dishId);

    if (isLoading) {
        return "Loading...";
    }

    if (!data) {
        return null;
    }
    const { name, price, ingredients, id } = data;
    return (
        <div className={style.root}>
            <Dish
                ingredients={ingredients}
                price={price}
                name={name}
                id={id}
                isAuthorized={isAuthorized}
            />
        </div>
    );
};
