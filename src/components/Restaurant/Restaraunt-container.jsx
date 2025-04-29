import { Restaurant } from "./Restaurant";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantContainer = ({ id }) => {
    const { data: restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result?.data?.find(
                ({ id: restaurantId }) => restaurantId === id
            ),
        }),
    });
    if (!restaurant) {
        return null;
    }

    const { name, menu, reviews } = restaurant;
    return <Restaurant name={name} menu={menu} reviews={reviews} id={id} />;
};
