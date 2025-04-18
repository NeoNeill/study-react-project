import { useParams } from "react-router";
import { RestarauntContainer } from "../components/Restaurant/Restaraunt-container";

export const RestaurantPage = () => {
    const { restaurantId } = useParams();

    return <RestarauntContainer id={restaurantId} />;
};
