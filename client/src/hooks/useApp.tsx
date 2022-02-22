import { useState } from "react";
import { useQuery } from "react-query";
import { LocationResponseData } from "../types/Location";
import { api } from "../utils";
import { apiEndpoints } from "../utils/constants";

const useApp = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toogleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    const locations = useQuery("locations", async () => {
        const { data } = await api.get<LocationResponseData>(
            apiEndpoints.location.getAll
        );
        return data;
    });

    return { isCollapsed, toogleSidebar, locations };
};

export default useApp;
