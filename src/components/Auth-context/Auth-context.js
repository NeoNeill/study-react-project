import { createContext } from "react";

export const AuthContext = createContext({
    isAuthorized: false,
    toggleAuth: () => {},
});
