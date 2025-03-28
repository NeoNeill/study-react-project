import { AuthButton } from "../Auth-button/Auth-button";
import { ToggleThemeButton } from "../Toggle-theme-button/Toggle-theme-button";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <span>Restaurants</span>
            <div className={styles.userSection}>
                <ToggleThemeButton />
                <AuthButton />
            </div>
        </header>
    );
};
