import { useCallback, useState } from "react";

const min = 0;
const max = 5;

export const useCounter = () => {
    const [value, setValue] = useState(min);
    const increment = useCallback(() => {
        if (value < max) {
            return setValue((count) => Math.min(count + 1));
        }
    }, [value]);
    const decrement = useCallback(() => {
        if (value > min) {
            return setValue((count) => Math.max(count - 1));
        }
    }, [value]);
    console.log(value);

    return {
        value,
        increment,
        decrement,
    };
};
