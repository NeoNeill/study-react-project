import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../components/Restaurant/Restaraunt-container";

export const RestaurantPage = () => {
    const { restaurantId } = useParams();

    return (
        <div>
            <RestaurantContainer id={restaurantId} />
            <Outlet />
        </div>
    );
};
