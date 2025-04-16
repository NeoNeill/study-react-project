import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../../redux/entities/restaurants/slice";

export const RestarauntContainer = ({ id }) => {
    const restaraunt = useSelector((state) => selectRestaurantsById(state, id));

    const { name, menu, reviews } = restaraunt;
    console.log(restaraunt);
    return <></>;
};
