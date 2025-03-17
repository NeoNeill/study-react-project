import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ menu, reviews }) => {
    return (
        <div>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </div>
    );
};
