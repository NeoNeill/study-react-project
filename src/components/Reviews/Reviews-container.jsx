import { useCallback } from "react";
import {
    useAddReviewMutation,
    useGetReviewsByRestaurantIdQuery,
    useGetUsersQuery,
} from "../../redux/services/api";
import { Reviews } from "./Reviews";

export const ReviewsContainer = ({ restaurantId }) => {
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
        <Reviews
            reviews={data}
            onAddReview={handleAddReview}
            isSubmitButtonDisabled={isAddReviewFetching}
        />
    );
};
