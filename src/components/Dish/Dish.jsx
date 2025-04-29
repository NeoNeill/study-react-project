import { DishCounter } from "../Dish-counter/Dish-counter";
import { TabLink } from "../tab-link/tab-link";
import style from "./Dish.module.css";

export const Dish = ({ data, isAuthorized }) => {
    return (
        <div className={style.menu}>
            <span className={style.ingredients}>
                Ingredients:
                <ul>
                    {data.map(({ id, name, price, ingredients }) => (
                        <>
                            <li key={id}>
                                {name}
                                {ingredients}
                            </li>
                            <span>Price: {price}</span>
                            {isAuthorized ? <DishCounter id={id} /> : null}
                        </>
                    ))}
                </ul>
            </span>
            <span className={style.back}>
                <TabLink to={"/restaurants"}>Back to restaurants</TabLink>
            </span>
        </div>
    );
};
