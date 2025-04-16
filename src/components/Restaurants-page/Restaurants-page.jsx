import { useState } from "react";
import { Restaurant } from "../Restaurant/Restaurant.jsx";
import { Tab } from "../Tab/Tab.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice.js";
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
                        <Tab
                            key={id}
                            id={id}
                            onClick={() => handleSetActiveRestaurant(id)}
                            isActive={id === activeRestaurantId}
                        />

                        {activeRestaurantId === id ? (
                            <Restaurant
                                key={activeRestaurantId}
                                id={activeRestaurantId}
                            />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};
