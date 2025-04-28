import { useParams } from "react-router";
import { Reviews } from "../components/Reviews/Reviews";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { useRequest } from "../redux/hooks/use-request";
import { getReviewsByRestaurantId } from "../redux/entities/reviews/get-reviews-by-restaraunt-id";
import {
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_REJECTED,
} from "../redux/constants";

export const RestarauntReviewsPage = () => {
    const { restaurantId } = useParams();
    const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    const { reviews } = restaurant || {};

    if (requestStatus === REQUEST_STATUS_PENDING) {
        return "loading...";
    }

    if (requestStatus === REQUEST_STATUS_REJECTED) {
        return "ERROR";
    }
    return reviews ? <Reviews ids={reviews} /> : <div>empty review</div>;
};
