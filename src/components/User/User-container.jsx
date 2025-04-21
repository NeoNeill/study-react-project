import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/slice";
import { User } from "./User";

export const UserContainer = ({ id }) => {
    const user = useSelector((state) => selectUserById(state, id));

    if (!user?.name) {
        return null;
    }
    return <User name={user.name} />;
};
