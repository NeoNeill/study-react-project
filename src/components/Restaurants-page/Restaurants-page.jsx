import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice.js";
import { RestaurantTab } from "../RestaurantTab/RestaurantTab.jsx";
import styles from "./Restaurants-page.module.css";

export const RestaurantsPage = () => {
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
    return (
        <div className={styles.restaurant}>
            {restaurantsIds.map((id) => {
                return (
                    <div className={styles.main} key={id}>
                        <RestaurantTab
                            key={id}
                            id={id}
                            onClick={() => handleSetActiveRestaurant(id)}
                            isActive={id === activeRestaurantId}
                        />
                    </div>
                );
            })}
        </div>
    );
};
