import { UserContainer } from "../User/User-container";

export const Review = ({ text, userId }) => {
    return (
        <>
            {text} - <UserContainer id={userId} />
        </>
    );
};
