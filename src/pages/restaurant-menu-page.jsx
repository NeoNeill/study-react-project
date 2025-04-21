import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { MenuContainer } from "../components/Menu/Menu-container";

export const RestaurantsMenuPage = () => {
    const { restaurantId } = useParams();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    const { menu } = restaurant || {};

    return <MenuContainer menuIds={menu} />;
};
