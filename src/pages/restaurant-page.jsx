import { useParams } from "react-router";
import { RestaurantContainer } from "../components/Restaurant/Restaraunt-container";
import { useRequest } from "../redux/hooks/use-request";
import { getRestaurant } from "../redux/entities/restaurants/get-restaurant";

export const RestaurantPage = () => {
    const { restaurantId } = useParams();

    const requestStatus = useRequest(getRestaurant, restaurantId);

    if (requestStatus === "pending") {
        return "loading...";
    }

    if (requestStatus === "rejected") {
        return "ERROR";
    }

    return <RestaurantContainer id={restaurantId} />;
};
