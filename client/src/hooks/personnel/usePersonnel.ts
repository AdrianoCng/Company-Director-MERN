import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";

import { apiEndpoints } from "../../constants";
import { request } from "../../utils";
import personnelKeys from "./personnel.keys";
import { GetPersonnelParams, PersonnelResponse } from "./personnel.types";

interface QueryOptions
    extends Omit<UseQueryOptions<PersonnelResponse, AxiosError>, "queryKey" | "queryFn"> {
    params?: GetPersonnelParams;
}
const usePersonnel = (queryOptions?: QueryOptions) => {
    const query = useQuery<PersonnelResponse, AxiosError>(
        personnelKeys.all(queryOptions?.params),
        async () => {
            const queryParams = queryOptions?.params;

            const params = {
                ...queryParams,
                location: queryParams?.location?.join(),
                department: queryParams?.department?.join(),
            };

            const { data } = await request<PersonnelResponse>({
                url: apiEndpoints.personnel.getAll,
                params,
            });

            return data;
        },
        { ...queryOptions }
    );

    return [query.data, query] as const;
};

export default usePersonnel;
