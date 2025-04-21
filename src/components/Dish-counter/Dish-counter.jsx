import { useCounter } from "./use-count";
import { Counter } from "../Counter/Counter";

export const DishCounter = ({ id }) => {
    const { amount, increment, decrement } = useCounter(id);

    return (
        <Counter value={amount} decrement={decrement} increment={increment} />
    );
};
