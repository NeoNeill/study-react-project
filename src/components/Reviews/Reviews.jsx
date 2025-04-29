import { use, useCallback } from "react";
import { AuthContext } from "../Auth-context/Auth-context";
import { ReviewContainer } from "../Review/Review-container";
import styles from "./Reviews.module.css";
import { ReviewForm } from "../Review-form/Review-form";
import {
    useAddReviewMutation,
    useGetReviewsByRestaurantIdQuery,
    useGetUsersQuery,
} from "../../redux/services/api";

export const Reviews = ({ restaurantId }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;

    const { data, isFetching: isGetReviewsFetching } =
        useGetReviewsByRestaurantIdQuery(restaurantId);
    useGetUsersQuery();
    const [addReview, { isLoading: isAddReviewFetching }] =
        useAddReviewMutation();

    const handleAddReview = useCallback(
        (review) => {
            addReview({ restaurantId, review });
        },
        [addReview, restaurantId]
    );

    if (isGetReviewsFetching || isAddReviewFetching) {
        return "Loading...";
    }

    if (!data) {
        return null;
    }
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
