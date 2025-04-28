import { use } from "react";
import { AuthContext } from "../Auth-context/Auth-context";
import { ReviewContainer } from "../Review/Review-container";
import styles from "./Reviews.module.css";
import { ReviewForm } from "../Review-form/Review-form";

export const Reviews = ({ ids }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;

    return (
        <>
            <h3>Reviews</h3>
            <ul className={styles.reviews}>
                {ids.map((reviewId) => (
                    <li key={reviewId}>
                        <ReviewContainer id={reviewId} />
                    </li>
                ))}
            </ul>
            {isAuthorized ? <ReviewForm /> : null}
        </>
    );
};
