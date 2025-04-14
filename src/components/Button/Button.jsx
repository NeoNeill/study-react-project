import classNames from "classnames/bind";
import styles from "./Button.module.css";
import { ThemeContext } from "../Theme-context/Theme-context";
import { use } from "react";

export const Button = ({ title, onClick, disabled, className, size }) => {
    const { theme } = use(ThemeContext);
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classNames(styles.root, className, {
                [styles.size500]: size === "500",
                [styles.size400]: size === "400",
                [styles.size600]: size === "600",
                [styles.dark]: theme === "dark",
                [styles.light]: theme === "light",
            })}
        >
            {title}
        </button>
    );
};
