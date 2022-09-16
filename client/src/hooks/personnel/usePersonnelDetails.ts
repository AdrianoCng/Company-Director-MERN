import { useQuery, UseQueryOptions } from "react-query";
import { AxiosError } from "axios";

import { apiEndpoints } from "./../../constants";
import { request } from "../../utils";
import { PersonnelDetailsResponse } from "./personnel.types";
import personnelKeys from "./personnel.keys";

interface QueryOptions
    extends Omit<UseQueryOptions<PersonnelDetailsResponse, AxiosError>, "queryKey" | "queryFn"> {
    personnelID: string;
}
const usePersonellDetails = ({ personnelID, ...queryOptions }: QueryOptions) => {
    const { data, ...query } = useQuery<PersonnelDetailsResponse, AxiosError>(
        personnelKeys.details(personnelID),
        async () => {
            const { data } = await request<PersonnelDetailsResponse>({
                url: apiEndpoints.personnel.getByID({ personnelID }),
            });

            return data;
        },
        {
            enabled: !!personnelID,
            refetchOnWindowFocus: false,
            staleTime: 0,
            ...queryOptions,
        }
    );

    return [data, query] as const;
};

export default usePersonellDetails;
