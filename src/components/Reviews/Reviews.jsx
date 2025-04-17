import { ReviewContainer } from "../Review/Review-container";
import styles from "./Reviews.module.css";

export const Reviews = ({ ids }) => {
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
        </>
    );
};
