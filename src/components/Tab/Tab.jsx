export const Tab = ({ onClick, isActive, title }) => {
    return (
        <button disabled={isActive} onClick={onClick}>
            {title}
        </button>
    );
};
