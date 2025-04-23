import { Link } from "react-router";
import style from "./home-page.module.css";

export const HomePage = () => {
    return (
        <div className={style.root}>
            <div className={style.home}>Home Page</div>
            <Link to="/restaurants" className={style.restaurants}>
                Restaraunts
            </Link>
        </div>
    );
};
