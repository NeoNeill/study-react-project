import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishTab } from "./Dish-tab";

export const DishTabContainer = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));

    if (!dish) {
        return null;
    }
    const { name } = dish;

    return <DishTab name={name} id={id} />;
};
