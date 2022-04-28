import { useQuery } from "react-query";

// Types
import { LocationsResponseData } from "../../types/location.types";

// Misc
import { apiEndpoints } from "../../constants";
import locationsKeyFactory from "../../queryKeys/locationsKeyFactory";
import { api } from "../../utils";

const useLocationsQuery = () => {
    return useQuery(locationsKeyFactory.baseKey, async () => {
        const { data } = await api.get<LocationsResponseData>(apiEndpoints.location.getAll);
        return data;
    });
};

export default useLocationsQuery;
