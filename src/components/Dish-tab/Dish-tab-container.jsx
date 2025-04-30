import { DishTab } from "./Dish-tab";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const DishTabContainer = ({ dishId }) => {
    const { data, isLoading } = useGetDishByIdQuery(dishId);
    if (isLoading) {
        return "Loading...";
    }

    if (!data) {
        return null;
    }

    return <DishTab name={data.name} id={data.id} />;
};
