import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { Dish } from "./Dish";
import { DishCounter } from "../Dish-counter/Dish-counter";
import { AuthContext } from "../Auth-context/Auth-context";
import { use } from "react";

export const DishContainer = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));
    if (!dish) {
        return null;
    }
    const { name, price, ingredients } = dish;
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >
            <Dish name={name} price={price} ingredients={ingredients} />
            {isAuthorized ? <DishCounter id={id} /> : null}
        </div>
    );
};
