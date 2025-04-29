import { useParams } from "react-router";
import { Reviews } from "../components/Reviews/Reviews";

export const RestarauntReviewsPage = () => {
    const { restaurantId } = useParams();

    return <Reviews restaurantId={restaurantId} />;
};
