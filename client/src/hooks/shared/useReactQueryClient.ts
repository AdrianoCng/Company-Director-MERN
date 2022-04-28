import { useQueryClient, QueryKey } from "react-query";

const useReactQueryClient = <T extends any>(key: QueryKey) => {
    const queryClient = useQueryClient();

    return queryClient.getQueryData(key);
};

export default useReactQueryClient;
