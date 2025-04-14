import { use } from "react";
import { Button } from "../Button/Button";
import { AuthContext } from "../Auth-context/Auth-context";
import styles from "./Auth-button.module.css";

export const AuthButton = () => {
    const { auth, toggleAuth } = use(AuthContext);
    const { isAuthorized, name } = auth;
    return (
        <div className={styles.root}>
            {isAuthorized && name && (
                <div className={styles.userName}>{auth.name}</div>
            )}
            <Button
                onClick={toggleAuth}
                title={isAuthorized ? "Logout" : "Login"}
                size={"400"}
            />
        </div>
    );
};
