import { Button } from "../Button/Button";
import { TabLink } from "../tab-link/tab-link";
import style from "./Dish.module.css";

export const Dish = ({ name, ingredients, price }) => {
    return (
        <div className={style.menu}>
            <span>{name}</span>
            <span className={style.ingredients}>
                Ingredients:
                <ul>
                    {ingredients.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </span>
            <span>Price: {price}</span>
            <span className={style.back}>
                <TabLink to={"/restaurants"}>Back to restaurants</TabLink>
            </span>
        </div>
    );
};
