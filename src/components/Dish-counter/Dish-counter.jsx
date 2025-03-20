import { useCounter } from "./use-count";
import { Counter } from "../Counter/Counter";

export const DishCounter = () => {
    const { value, increment, decrement } = useCounter();

    return (
        <Counter value={value} decrement={decrement} increment={increment} />
    );
};
