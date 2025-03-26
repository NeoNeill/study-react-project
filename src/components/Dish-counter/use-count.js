import { useCallback, useState } from "react";

const min = 0;
const max = 5;

export const useCounter = () => {
    const [value, setValue] = useState(min);
    const increment = useCallback(() => {
        return setValue((count) => Math.min(count + 1, max));
    }, [max]);
    const decrement = useCallback(() => {
        return setValue((count) => Math.max(count - 1, min));
    }, [min]);

    return {
        value,
        increment,
        decrement,
    };
};
