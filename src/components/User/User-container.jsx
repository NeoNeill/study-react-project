import { User } from "./User";
import { useGetUsersQuery } from "../../redux/services/api";

export const UserContainer = ({ id }) => {
    const { data } = useGetUsersQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result?.data?.find(({ id: userId }) => userId === id),
        }),
    });

    if (!data) {
        return null;
    }
    return <User name={data.name} />;
};
