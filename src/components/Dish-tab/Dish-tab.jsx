import { TabLink } from "../tab-link/tab-link";

export const DishTab = ({ name, id }) => {
    return <TabLink to={`/dish/${id}`}>{name}</TabLink>;
};
