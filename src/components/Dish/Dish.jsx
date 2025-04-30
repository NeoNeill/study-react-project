import { DishCounter } from "../Dish-counter/Dish-counter";
import { TabLink } from "../tab-link/tab-link";
import style from "./Dish.module.css";

export const Dish = ({ name, price, ingredients, isAuthorized, id }) => {
    return (
        <div className={style.menu}>
            {name}
            <span className={style.ingredients}>
                Ingredients:
                <ul>
                    {ingredients.map((item) => {
                        return <li key={item}>{item}</li>;
                    })}
                    <span>Price: {price}</span>
                    {isAuthorized ? <DishCounter id={id} /> : null}
                </ul>
            </span>
            <span className={style.back}>
                <TabLink to={"/restaurants"}>Back to restaurants</TabLink>
            </span>
        </div>
    );
};
