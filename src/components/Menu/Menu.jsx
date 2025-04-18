import { use } from "react";
import { DishCounter } from "../Dish-counter/Dish-counter";
import { AuthContext } from "../Auth-context/Auth-context";
import { DishTabContainer } from "../Dish-tab/Dish-tab-container";
import styles from "./Menu.module.css";

export const Menu = ({ menuIds }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;

    return (
        <div className={styles.root}>
            <h3>Menu</h3>
            <ul className={styles.main}>
                {menuIds.map((menuId) => (
                    <span className={styles.menu} key={menuId}>
                        <li key={menuId}>
                            <DishTabContainer id={menuId} />
                        </li>
                        {isAuthorized ? <DishCounter id={menuId} /> : null}
                    </span>
                ))}
            </ul>
        </div>
    );
};
