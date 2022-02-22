import { LocationResponseData } from "../types/Location";
import { api } from "../utils";
import { apiEndpoints } from "../utils/constants";

const fetchAllLocations = async () => {
    const { data } = await api.get<LocationResponseData>(
        apiEndpoints.location.getAll
    );
    return data;
};

const LocationServices = {
    fetchAllLocations,
};
export default LocationServices;
