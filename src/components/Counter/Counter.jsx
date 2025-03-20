export const Counter = ({ value, decrement, increment }) => {
    return (
        <div>
            <button onClick={decrement}>-</button>
            {value}
            <button onClick={increment}>+</button>
        </div>
    );
};
