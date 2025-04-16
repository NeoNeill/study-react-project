import { ReviewContainer } from "../Review/Review-container";
import styles from "./Reviews.module.css";

export const Reviews = ({ id }) => {
    return (
        <>
            <h3>Reviews</h3>
            <ul className={styles.reviews}>
                {id.map((reviewsId) => (
                    <li key={reviewsId}>
                        <ReviewContainer id={reviewsId} />
                    </li>
                ))}
            </ul>
        </>
    );
};
