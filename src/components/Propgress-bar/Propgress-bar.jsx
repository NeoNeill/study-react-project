import { useProgress } from "./use-progress";
import styles from "./Propgress-bar.module.css";

export const PropgressBar = () => {
    const progress = useProgress();
    return (
        <div
            className={styles.progress}
            style={{
                width: progress,
            }}
        />
    );
};
