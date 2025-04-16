export const CartItem = ({ amount, dishesName }) => {
    return (
        <span>
            {dishesName} - {amount}
        </span>
    );
};
