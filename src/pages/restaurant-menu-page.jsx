import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { useRequest } from "../redux/hooks/use-request";
import { getDishesByRestaurantId } from "../redux/entities/dishes/get-dishes-by-restaraunt-id";
import { Menu } from "../components/Menu/Menu";
import {
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_REJECTED,
} from "../redux/constants";

export const RestaurantsMenuPage = () => {
    const { restaurantId } = useParams();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    const { menu } = restaurant || {};

    const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

    if (requestStatus === REQUEST_STATUS_PENDING) {
        return "loading...";
    }

    if (requestStatus === REQUEST_STATUS_REJECTED) {
        return "ERROR";
    }

    return menu?.length ? <Menu menuIds={menu} /> : <div>emty dishes</div>;
};
