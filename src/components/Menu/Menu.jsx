import { DishCounter } from "../Dish-counter/Dish-counter";
import { DishTabContainer } from "../Dish-tab/Dish-tab-container";
import styles from "./Menu.module.css";

export const Menu = ({ ids, isAuthorized }) => {
    return (
        <div className={styles.root}>
            <h3>Menu</h3>
            <ul className={styles.main}>
                {ids.map((id) => (
                    <li key={id} className={styles.menu}>
                        <DishTabContainer id={id} />
                        {isAuthorized ? <DishCounter id={id} /> : null}
                    </li>
                ))}
            </ul>
        </div>
    );
};
