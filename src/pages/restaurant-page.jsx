import { useParams } from "react-router";
import { RestaurantContainer } from "../components/Restaurant/Restaraunt-container";
import { useRequest } from "../redux/hooks/use-request";
import { getRestaurant } from "../redux/entities/restaurants/get-restaurant";
import {
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_REJECTED,
} from "../redux/constants";

export const RestaurantPage = () => {
    const { restaurantId } = useParams();

    const requestStatus = useRequest(getRestaurant, restaurantId);

    if (requestStatus === REQUEST_STATUS_PENDING) {
        return "loading...";
    }

    if (requestStatus === REQUEST_STATUS_REJECTED) {
        return "ERROR";
    }

    return <RestaurantContainer id={restaurantId} />;
};
