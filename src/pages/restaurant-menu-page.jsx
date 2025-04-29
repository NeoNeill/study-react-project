import { useParams } from "react-router";
import { Menu } from "../components/Menu/Menu";

export const RestaurantsMenuPage = () => {
    const { restaurantId } = useParams();

    return <Menu restaurantId={restaurantId} />;
};
