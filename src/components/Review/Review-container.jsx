import { Review } from "./Review";

export const ReviewContainer = ({ userId, text }) => {
    return <Review userId={userId} text={text} />;
};
