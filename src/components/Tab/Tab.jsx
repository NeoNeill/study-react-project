import { Button } from "../Button/Button";

export const Tab = ({ onClick, isActive, title }) => {
    return (
        <Button
            disabled={isActive}
            onClick={onClick}
            title={title}
            size={"600"}
        />
    );
};
