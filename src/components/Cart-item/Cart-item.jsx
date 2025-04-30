import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";
import { DishCounter } from "../Dish-counter/Dish-counter";

export const CartItem = ({ id }) => {
    const { data: dish } = useGetDishesByRestaurantIdQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result?.data?.find(({ id: dishId }) => dishId === id),
        }),
    });

    if (!dish) {
        return null;
    }
    return (
        <div>
            {dish.name}
            <DishCounter id={id} />
        </div>
    );
};
