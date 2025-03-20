import { useState } from "react";

const MIN = 0;
const MAX = 5;

export const useCount = () => {
    const [count, setCount] = useState(MIN);
    const increment = () => {
        if (count < MAX) {
            setCount(count + 1);
        }
    };
    const decrement = () => {
        if (count > MIN) {
            setCount(count - 1);
        }
    };
    return {
        count,
        increment,
        decrement,
    };
};
