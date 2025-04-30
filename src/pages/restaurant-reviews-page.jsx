import { useParams } from "react-router";
import { ReviewsContainer } from "../components/Reviews/Reviews-container";

export const RestarauntReviewsPage = () => {
    const { restaurantId } = useParams();

    return <ReviewsContainer restaurantId={restaurantId} />;
};
