import { useState } from "react";
import { Restaurant } from "../Restaurant/Restaurant.jsx";
import { restaurants } from "../../materials/mock.js";
import { Tab } from "../Tab/Tab.jsx";
import styles from "./Restaurants-page.module.css";

export const RestaurantsPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(
        restaurants[0].id
    );
    const handleSetActiveRestaurant = (restaurantId) => {
        const restaurant = restaurants.find(({ id }) => {
            return id === restaurantId;
        });
        if (restaurant) {
            setActiveRestaurantId(restaurantId);
        }
    };
    return (
        <div className={styles.restaurant}>
            {restaurants.map(({ id, name, menu, reviews }) => {
                return (
                    <div className={styles.main}>
                        <Tab
                            key={id}
                            title={name}
                            onClick={() => handleSetActiveRestaurant(id)}
                            isActive={id === activeRestaurantId}
                        />

                        {activeRestaurantId === id ? (
                            <Restaurant menu={menu} reviews={reviews} />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};
