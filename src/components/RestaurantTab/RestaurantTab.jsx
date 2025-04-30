import { TabLink } from "../tab-link/tab-link";

export const RestaurantTab = ({ name, id }) => {
    return <TabLink to={id}>{name}</TabLink>;
};
