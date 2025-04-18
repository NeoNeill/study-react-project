import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Menu } from "../components/Menu/Menu";

export const RestaurantsMenuPage = () => {
    const { restaurantId } = useParams();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    const { menu } = restaurant || {};

    return <Menu menuIds={menu} />;
};
