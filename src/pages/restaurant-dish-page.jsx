import { useParams } from "react-router";
import { DishContainer } from "../components/Dish/Dish-container";
import { useRequest } from "../redux/hooks/use-request";
import { getDishById } from "../redux/entities/dishes/get-dish-by-id";
import { useSelector } from "react-redux";
import { selectDishById } from "../redux/entities/dishes/slice";
import {
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_REJECTED,
} from "../redux/constants";

export const RestarauntDishPage = () => {
    const { dishId } = useParams();

    const dish = useSelector((state) => selectDishById(state, dishId));

    const requestStatus = useRequest(getDishById, dishId);

    if (requestStatus === REQUEST_STATUS_PENDING) {
        return "loading...";
    }

    if (requestStatus === REQUEST_STATUS_REJECTED) {
        return "ERROR";
    }

    return dish ? <DishContainer dish={dish} /> : <div>empty dish</div>;
};
