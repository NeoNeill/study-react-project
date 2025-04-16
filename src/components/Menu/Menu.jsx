import { use } from "react";
import { DishCounter } from "../Dish-counter/Dish-counter";
import { AuthContext } from "../Auth-context/Auth-context";
import styles from "./Menu.module.css";
import { DishContainer } from "../Dish/Dish-container";

export const Menu = ({ menusId }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;
    return (
        <>
            <h3>Menu</h3>
            <ul className={styles.root}>
                {menusId.map((menuId) => (
                    <span className={styles.menu} key={menuId}>
                        <li key={menuId}>
                            <DishContainer id={menuId} />
                        </li>
                        {isAuthorized ? <DishCounter id={menuId} /> : null}
                    </span>
                ))}
            </ul>
        </>
    );
};
