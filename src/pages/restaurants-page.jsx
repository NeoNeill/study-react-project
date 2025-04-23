import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { getRestaurants } from "../redux/entities/restaurants/get-restaurants.js";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice.js";
import { RestaurantTab } from "../components/RestaurantTab/RestaurantTab.jsx";
import { useRequest } from "../redux/hooks/use-request.js";
import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
    const requestStatus = useRequest(getRestaurants);
    const restaurantsIds = useSelector(selectRestaurantsIds);
    const [activeRestaurantId, setActiveRestaurantId] = useState(
        restaurantsIds[0]
    );
    const handleSetActiveRestaurant = (restaurantId) => {
        const restaurant = restaurantsIds.find((id) => {
            return id === restaurantId;
        });
        if (restaurant) {
            setActiveRestaurantId(restaurantId);
        }
    };

    if (requestStatus === "pending") {
        return "loading...";
    }

    if (requestStatus === "rejected") {
        return "ERROR";
    }

    return (
        <div className={styles.root}>
            <div className={styles.restaurant}>
                {restaurantsIds.map((id) => {
                    return (
                        <div className={styles.main} key={id}>
                            <RestaurantTab
                                id={id}
                                onClick={() => handleSetActiveRestaurant(id)}
                                isActive={id === activeRestaurantId}
                            />
                        </div>
                    );
                })}
            </div>
            <Outlet />
        </div>
    );
};
