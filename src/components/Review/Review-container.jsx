import { useSelector } from "react-redux";
import { selectReviewsById } from "../../redux/entities/reviews/slice";
import { Review } from "./Review";

export const ReviewContainer = ({ id }) => {
    const review = useSelector((state) => selectReviewsById(state, id));

    if (!review.text) {
        return null;
    }
    return <Review text={review.text} userId={review.userId} />;
};
