import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { RestarauntContainer } from "../Restaurant/Restaraunt-container";

export const RestaurantTab = ({ onClick, isActive, id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    if (!restaurant) {
        return null;
    }
    const { name } = restaurant;
    return (
        <>
            <Button
                disabled={isActive}
                onClick={onClick}
                size={"600"}
                title={name}
            />
            {isActive && <RestarauntContainer id={id} />}
        </>
    );
};
