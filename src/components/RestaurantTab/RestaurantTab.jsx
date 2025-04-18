import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Link } from "react-router";

export const RestaurantTab = ({ onClick, isActive, id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    if (!restaurant) {
        return null;
    }
    const { name } = restaurant;
    return (
        <>
            <Link to={`/restaurants/${id}`}>
                <Button
                    disabled={isActive}
                    onClick={onClick}
                    size={"600"}
                    title={name}
                />
            </Link>
        </>
    );
};
