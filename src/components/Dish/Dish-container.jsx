import { useSelector } from "react-redux";
import { selectDishesById } from "../../redux/entities/dishes/slice";
import { Dish } from "./Dish";

export const DishContainer = ({ id }) => {
    const dishes = useSelector((state) => selectDishesById(state, id));
    if (!dishes) {
        return null;
    }
    const { name, price, ingredients } = dishes;
    return <Dish name={name} price={price} ingredients={ingredients} />;
};
