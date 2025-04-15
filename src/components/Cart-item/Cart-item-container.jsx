import { useSelector } from "react-redux";
import { selectAmountByItemId } from "../../redux/entities/cart/slice";
import { selectRestaurantsById } from "../../redux/entities/restaurants/slice";
import { CartItem } from "./Cart-item";

export const CartItemContainer = ({ id }) => {
    const amount = useSelector((state) => selectAmountByItemId(state, id));
    const restaurant = useSelector((state) => selectRestaurantsById(state, id));

    if (!restaurant) {
        return null;
    }

    return <CartItem amount={amount} restaurantName={restaurant.name} />;
};
