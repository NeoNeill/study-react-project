import { useParams } from "react-router";
import { DishContainer } from "../components/Dish/Dish-container";

export const RestarauntDishPage = () => {
    const { dishId } = useParams();

    return <DishContainer dishId={dishId} />;
};
