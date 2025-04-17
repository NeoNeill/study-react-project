import { use } from "react";
import { AuthContext } from "../Auth-context/Auth-context";
import { Menu } from "../Menu/Menu";
import { ReviewForm } from "../Review-form/Review-form";
import { Reviews } from "../Reviews/Reviews";
import styles from "./Restaurant.module.css";

export const Restaurant = ({ id, name, menu, reviews }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;
    return (
        <div className={styles.root}>
            <Menu menusId={menu} />
            <Reviews ids={reviews} />
            {isAuthorized ? <ReviewForm /> : null}
        </div>
    );
};
