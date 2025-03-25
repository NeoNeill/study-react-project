import { useProgress } from "./Use-progress";

export const PropgressBar = () => {
    const progress = useProgress();
    return (
        <div
            style={{
                width: progress,
                position: "fixed",
                top: 0,
                left: 0,
                height: "8px",
                background: "#CBFBFE",
            }}
        />
    );
};
