import { UserContainer } from "../User/User-container";

export const Review = ({ text, rating, userId }) => {
    return (
        <>
            {rating} {text} - <UserContainer id={userId} />
        </>
    );
};
