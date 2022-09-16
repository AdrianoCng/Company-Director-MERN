import { useQuery, UseQueryOptions } from "react-query";
import { AxiosError } from "axios";

import { apiEndpoints } from "./../../constants";
import { request } from "../../utils";
import { LocationsResponseData } from "./locations.types";
import locationsKeys from "./locations.keys";

type QueryOptions = Omit<
    UseQueryOptions<LocationsResponseData, AxiosError>,
    "queryKey" | "queryFn"
>;

const useLocations = (queryOptions: QueryOptions) => {
    const { data, ...query } = useQuery<LocationsResponseData, AxiosError>(
        locationsKeys.all(),
        async () => {
            const { data } = await request({
                url: apiEndpoints.location.getAll,
            });

            return data;
        },
        { ...queryOptions }
    );

    return [data, query] as const;
};

export default useLocations;
