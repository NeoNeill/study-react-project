import { useSelector } from "react-redux";
import { selectRreviewById } from "../../redux/entities/reviews/slice";
import { Review } from "./Review";

export const ReviewContainer = ({ id }) => {
    const review = useSelector((state) => selectRreviewById(state, id));
    if (!review) {
        return null;
    }
    const { text, userId, rating } = review;
    return <Review rating={rating} userId={userId} text={text} />;
};
