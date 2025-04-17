import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Restaurant } from "./Restaurant";

export const RestarauntContainer = ({ id }) => {
    const restaraunt = useSelector((state) => selectRestaurantById(state, id));

    const { name, menu, reviews } = restaraunt;

    return <Restaurant name={name} menu={menu} reviews={reviews} id={id} />;
};
