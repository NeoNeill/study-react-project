import { Menu } from "../Menu/Menu";
import { ReviewForm } from "../Review-form/Review-form";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ menu, reviews }) => {
    return (
        <div>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
            <ReviewForm />
        </div>
    );
};
