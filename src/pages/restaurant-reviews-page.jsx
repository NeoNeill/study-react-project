import { useParams } from "react-router";
import { Reviews } from "../components/Reviews/Reviews";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";

export const RestarauntReviewsPage = () => {
    const { restaurantId } = useParams();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    const { reviews } = restaurant || {};

    return reviews.length ? <Reviews ids={reviews} /> : <div>empty review</div>;
};
