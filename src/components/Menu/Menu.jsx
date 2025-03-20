import { DishCounter } from "../Dish-counter/Dish-counter";

export const Menu = ({ menu }) => {
    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((menu) => (
                    <li key={menu.id}>{menu.name}</li>
                ))}
            </ul>
            <DishCounter />
        </>
    );
};
