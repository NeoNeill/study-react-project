import { AuthButton } from "../Auth-button/Auth-button";
import { ToggleThemeButton } from "../Toggle-theme-button/Toggle-theme-button";
import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";

export const Header = () => {
    return (
        <header className={styles.root}>
            <div className={styles.header}>
                <img src={Logo} className={styles.logo} />
                <span>Restaurants</span>
            </div>
            <div className={styles.userSection}>
                <ToggleThemeButton />
                <AuthButton />
            </div>
        </header>
    );
};
