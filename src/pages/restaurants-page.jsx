import { Outlet } from "react-router";
import { RestaurantTab } from "../components/RestaurantTab/RestaurantTab.jsx";
import styles from "./restaurants-page.module.css";
import { useGetRestaurantsQuery } from "../redux/services/api.js";

export const RestaurantsPage = () => {
    const { data, isLoading, isError } = useGetRestaurantsQuery();
    if (isLoading) {
        return "Loading...";
    }
    if (isError) {
        return "error";
    }
    if (!data) {
        return null;
    }
    return (
        <div className={styles.root}>
            <div className={styles.restaurant}>
                {data.map(({ id, name }) => {
                    return (
                        <div className={styles.main} key={id}>
                            <RestaurantTab name={name} id={id} />
                        </div>
                    );
                })}
            </div>
            <Outlet />
        </div>
    );
};
