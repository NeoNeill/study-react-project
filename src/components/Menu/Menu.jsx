import { DishAndCounter } from "../Dish-and-counter/Dish-and-counter";
import styles from "./Menu.module.css";

export const Menu = ({ restaurantId }) => {
    return (
        <div className={styles.root}>
            <h3>Menu</h3>
            <ul className={styles.main}>
                {menuIds.map((id) => (
                    <li key={id} className={styles.menu}>
                        <DishAndCounter id={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
