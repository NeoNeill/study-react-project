import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { TabLink } from "../tab-link/tab-link";

export const RestaurantTab = ({ onClick, isActive, id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    if (!restaurant) {
        return null;
    }
    const { name } = restaurant;
    return <TabLink to={`/restaurants/${id}`}>{name}</TabLink>;
};
