import { useState } from "react";
import { useQuery } from "react-query";
import { PersonnelResponseData } from "../types/Personnel";
import { DepartmentResponseObject } from "../types/Department";
import { LocationResponseData } from "../types/Location";
import { api } from "../utils";
import { apiEndpoints } from "../utils/constants";

const useHomepage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isCollapsed, setIsCollapsed] = useState(true);

    const allPersonnel = useQuery(["all personnel", currentPage], async () => {
        const { data } = await api.get<PersonnelResponseData>(
            `${apiEndpoints.personnel.getAll}?page=${currentPage}`
        );
        return data;
    });

    const locations = useQuery("locations", async () => {
        const { data } = await api.get<LocationResponseData>(
            apiEndpoints.location.getAll
        );
        return data;
    });

    const departments = useQuery("departments", async () => {
        const { data } = await api.get<DepartmentResponseObject[]>(
            apiEndpoints.department.getAll
        );
        return data;
    });

    const toogleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    const goNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const goPreviousPage = () => {
        setCurrentPage((prev) => prev - 1);
    };

    return {
        allPersonnel,
        goNextPage,
        goPreviousPage,
        toogleSidebar,
        locations,
        departments,
        isCollapsed,
    };
};

export default useHomepage;
