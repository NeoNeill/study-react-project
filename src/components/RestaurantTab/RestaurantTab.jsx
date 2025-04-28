import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { TabLink } from "../tab-link/tab-link";

export const RestaurantTab = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    return <TabLink to={`/restaurants/${id}`}>{restaurant.name}</TabLink>;
};
