import { use } from "react";
import { DishCounter } from "../Dish-counter/Dish-counter";
import styles from "./Menu.module.css";
import { AuthContext } from "../Auth-context/Auth-context";

export const Menu = ({ menu }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;
    return (
        <>
            <h3>Menu</h3>
            <ul className={styles.root}>
                {menu.map((menu) => (
                    <span className={styles.menu}>
                        <li key={menu.id}>{menu.name}</li>
                        {isAuthorized ? <DishCounter /> : null}
                    </span>
                ))}
            </ul>
        </>
    );
};
