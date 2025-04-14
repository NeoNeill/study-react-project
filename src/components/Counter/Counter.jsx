import { Button } from "../Button/Button";
import styles from "./Counter.module.css";

export const Counter = ({ value, decrement, increment }) => {
    return (
        <div className={styles.counter}>
            <Button onClick={decrement} title={"-"} size={"400"} />
            {value}
            <Button onClick={increment} title={"+"} size={"400"} />
        </div>
    );
};
