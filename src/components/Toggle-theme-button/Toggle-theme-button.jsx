import { use } from "react";
import { Button } from "../Button/Button";
import { ThemeContext } from "../Theme-context/Theme-context";

export const ToggleThemeButton = () => {
    const { theme, toggleTheme } = use(ThemeContext);
    return (
        <Button
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
            size={"400"}
        />
    );
};
