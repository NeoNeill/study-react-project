import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";
import { DishAndCounter } from "../Dish-and-counter/Dish-and-counter";
import styles from "./Menu.module.css";

export const Menu = ({ restaurantsId }) => {
    const { data, isLoading } = useGetDishesByRestaurantIdQuery(restaurantsId);
    if (isLoading) {
        return "Loading...";
    }
    if (!data) {
        return null;
    }

    return (
        <div className={styles.root}>
            <h3>Menu</h3>
            <ul className={styles.main}>
                {data.map(({ id }) => (
                    <li key={id} className={styles.menu}>
                        <DishAndCounter dishId={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
