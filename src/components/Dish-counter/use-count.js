import { useState } from "react";

const min = 0;
const max = 5;

export const useCounter = () => {
    const [value, setValue] = useState(min);
    const increment = () => {
        if (value < max) {
            setValue(value + 1);
        }
    };
    const decrement = () => {
        if (value > min) {
            setValue(value - 1);
        }
    };
    return {
        value,
        increment,
        decrement,
    };
};
