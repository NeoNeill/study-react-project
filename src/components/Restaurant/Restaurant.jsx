import { use } from "react";
import { AuthContext } from "../Auth-context/Auth-context";
import { Menu } from "../Menu/Menu";
import { ReviewForm } from "../Review-form/Review-form";
import { Reviews } from "../Reviews/Reviews";
import styles from "./Restaurant.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../../redux/entities/restaurants/slice";

export const Restaurant = ({ id }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;
    const restaurant = useSelector((state) => selectRestaurantsById(state, id));
    if (!restaurant) {
        return null;
    }
    const { menu, reviews } = restaurant;
    return (
        <div className={styles.root}>
            <Menu menu={menu} id={id} />
            <Reviews reviews={reviews} />
            {isAuthorized ? <ReviewForm /> : null}
        </div>
    );
};
