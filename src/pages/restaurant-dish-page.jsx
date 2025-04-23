import { useParams } from "react-router";
import { DishContainer } from "../components/Dish/Dish-container";
import { useRequest } from "../redux/hooks/use-request";
import { getDishById } from "../redux/entities/dishes/get-dish-by-id";
import { useSelector } from "react-redux";
import { selectDishById } from "../redux/entities/dishes/slice";

export const RestarauntDishPage = () => {
    const { dishId } = useParams();

    const dish = useSelector((state) => selectDishById(state, dishId));
    if (!dish) {
        return null;
    }
    const requestStatus = useRequest(getDishById, dishId);

    if (requestStatus === "pending") {
        return "loading...";
    }

    if (requestStatus === "rejected") {
        return "ERROR";
    }
    const { name, price, id, ingredients } = dish;
    return (
        <DishContainer
            id={id}
            ingredients={ingredients}
            price={price}
            name={name}
        />
    );
};
