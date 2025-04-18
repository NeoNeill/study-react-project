import { NavLink } from "react-router";

export const TabLink = ({ children, to }) => {
    return <NavLink to={to}>{children}</NavLink>;
};
