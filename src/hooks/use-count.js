import React, { useState } from 'react'

export const useCount = () => {
    const [count, setCount] = useState(0);
    const MIN = 0;
    const MAX = 5;
    const increment = () => {
        if (count < MAX) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count > MIN) {
            setCount(count - 1);
        }
    }
    return {
        count,
        increment,
        decrement,
    }
}
