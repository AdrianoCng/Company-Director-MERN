import { useQuery } from "react-query";

// Types
import { LocationsResponseData } from "../../types/location.types";

// Misc
import { apiEndpoints } from "../../constants";
import locationsKeyFactory from "../../queryKeys/locationsKeyFactory";
import { request } from "../../utils";

const useLocationsQuery = () => {
    return useQuery(
        locationsKeyFactory.baseKey,
        async () => {
            const { data } = await request<LocationsResponseData>({
                url: apiEndpoints.location.getAll,
                method: "GET",
            });
            return data;
        },
        {
            staleTime: Infinity,
        }
    );
};

export default useLocationsQuery;
