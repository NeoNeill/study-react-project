import { use } from "react";
import { AuthContext } from "../Auth-context/Auth-context";
import { ReviewContainer } from "../Review/Review-container";
import styles from "./Reviews.module.css";
import { ReviewForm } from "../Review-form/Review-form";

export const Reviews = ({ reviews, onAddReview, isSubmitButtonDisabled }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;

    return (
        <>
            <h3>Reviews</h3>
            <ul className={styles.reviews}>
                {reviews.map(({ id, text, userId }) => (
                    <li key={id}>
                        <ReviewContainer userId={userId} text={text} />
                    </li>
                ))}
            </ul>
            {isAuthorized ? (
                <ReviewForm
                    onSubmit={onAddReview}
                    isSubmitButtonDisabled={isSubmitButtonDisabled}
                />
            ) : null}
        </>
    );
};
