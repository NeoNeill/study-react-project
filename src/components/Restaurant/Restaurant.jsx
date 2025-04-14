import { use } from "react";
import { AuthContext } from "../Auth-context/Auth-context";
import { Menu } from "../Menu/Menu";
import { ReviewForm } from "../Review-form/Review-form";
import { Reviews } from "../Reviews/Reviews";
import styles from "./Restaurant.module.css";

export const Restaurant = ({ menu, reviews }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;
    return (
        <div className={styles.root}>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
            {isAuthorized ? <ReviewForm /> : null}
        </div>
    );
};
