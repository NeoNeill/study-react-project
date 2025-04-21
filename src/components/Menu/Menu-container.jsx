import { use } from "react";
import { Menu } from "./Menu";
import { AuthContext } from "../Auth-context/Auth-context";

export const MenuContainer = ({ menuIds }) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;

    return <Menu ids={menuIds} isAuthorized={isAuthorized} />;
};
