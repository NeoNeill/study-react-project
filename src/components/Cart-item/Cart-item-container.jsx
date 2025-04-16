import { useSelector } from "react-redux";
import { selectAmountByItemId } from "../../redux/entities/cart/slice";
import { CartItem } from "./Cart-item";
import { selectDishesById } from "../../redux/entities/dishes/slice";

export const CartItemContainer = ({ id }) => {
    const dishes = useSelector((state) => selectDishesById(state, id));
    const amount = useSelector((state) => selectAmountByItemId(state, id));
    if (!dishes) {
        return null;
    }
    return <CartItem amount={amount} dishesName={dishes.name} />;
};
