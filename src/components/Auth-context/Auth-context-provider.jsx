import { useState } from "react";
import { AuthContext } from "./Auth-context";

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthorized: false });

    const toggleAuth = () => {
        setAuth((prev) => {
            return prev.isAuthorized
                ? { isAuthorized: false }
                : { isAuthorized: true, name: "User" };
        });
    };
    return <AuthContext value={{ auth, toggleAuth }}>{children}</AuthContext>;
};
