import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { selectRestaurantsById } from "../../redux/entities/restaurants/slice";

export const Tab = ({ onClick, isActive, id }) => {
    const restaurant = useSelector((state) => selectRestaurantsById(state, id));
    if (!restaurant) {
        return null;
    }
    const { name } = restaurant;
    return (
        <Button
            disabled={isActive}
            onClick={onClick}
            key={id}
            size={"600"}
            title={name}
        />
    );
};
