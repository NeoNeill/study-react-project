import { useCount } from "../../hooks/use-count";

export const Counter = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};
