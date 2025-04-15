import { use } from "react";
import { DishCounter } from "../Dish-counter/Dish-counter";
import styles from "./Menu.module.css";
import { AuthContext } from "../Auth-context/Auth-context";

export const Menu = ({ menu, id }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;
    return (
        <>
            <h3>Menu</h3>
            <ul className={styles.root}>
                {menu.map((menu) => (
                    <span className={styles.menu}>
                        <li key={id}>{menu}</li>
                        {isAuthorized ? <DishCounter id={id} /> : null}
                    </span>
                ))}
            </ul>
        </>
    );
};
