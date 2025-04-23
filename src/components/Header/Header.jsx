import { AuthButton } from "../Auth-button/Auth-button";
import { ToggleThemeButton } from "../Toggle-theme-button/Toggle-theme-button";
import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg";
import { TabLink } from "../tab-link/tab-link";

export const Header = () => {
    return (
        <header className={styles.root}>
            <div className={styles.header}>
                <TabLink to={"/"}>
                    <img src={logo} className={styles.logo} />
                </TabLink>
                <span>Restaurants</span>
            </div>
            <div className={styles.userSection}>
                <ToggleThemeButton />
                <AuthButton />
            </div>
        </header>
    );
};
