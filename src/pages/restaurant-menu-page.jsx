import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { MenuContainer } from "../components/Menu/Menu-container";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { useRequest } from "../redux/hooks/use-request";
import { getDishesByRestaurantId } from "../redux/entities/dishes/get-dishes-by-restaraunt-id";

export const RestaurantsMenuPage = () => {
    const { restaurantId } = useParams();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    const { menu } = restaurant || {};

    const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

    if (requestStatus === "pending") {
        return "loading...";
    }

    if (requestStatus === "rejected") {
        return "ERROR";
    }

    return menu?.length ? (
        <MenuContainer menuIds={menu} />
    ) : (
        <div>emty dishes</div>
    );
};
