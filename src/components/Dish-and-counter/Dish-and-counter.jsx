import { use } from "react";
import { AuthContext } from "../Auth-context/Auth-context";
import { DishTabContainer } from "../Dish-tab/Dish-tab-container";
import { DishCounter } from "../Dish-counter/Dish-counter";

export const DishAndCounter = ({ id }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;
    return (
        <>
            <DishTabContainer id={id} />
            {isAuthorized ? <DishCounter id={id} /> : null}
        </>
    );
};
