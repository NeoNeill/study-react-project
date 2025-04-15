export const CartItem = ({ amount, restaurantName }) => {
    return (
        <span>
            {restaurantName} - {amount}
        </span>
    );
};
