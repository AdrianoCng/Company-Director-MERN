import { useState } from "react";
import { useQuery } from "react-query";
import LocationServices from "../services/LocationServices";

const useApp = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toogleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    const locations = useQuery("locations", LocationServices.fetchAllLocations);

    return { isCollapsed, toogleSidebar, locations };
};

export default useApp;
