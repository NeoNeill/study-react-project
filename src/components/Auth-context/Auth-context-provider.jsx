import { useState } from "react";
import { AuthContext } from "./Auth-context";

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthorized: false });

    const toggleAuth = () => {
        setAuth((prev) => {
            return prev.isAuthorized
                ? { isAuthorized: false }
                : {
                      isAuthorized: true,
                      userName: "Elli",
                      userId: "1547500a-er16-4440-a83d-91bd4e9d651c",
                  };
        });
    };
    return <AuthContext value={{ auth, toggleAuth }}>{children}</AuthContext>;
};
