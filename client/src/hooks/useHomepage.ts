import { useState } from "react";
import { useQuery } from "react-query";

// Types
import { PersonnelResponseData } from "../types/personnel.types";
import { DepartmentResponseObject } from "../types/department.types";
import { LocationResponseData } from "../types/location.types";

// Misc
import { api } from "../utils";
import { apiEndpoints, paginationSize } from "../constants";

interface QueryParamsState {
    [key: string]: string[];
}

const useHomepage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [queryParams, setQueryParams] = useState<QueryParamsState>({});

    const allPersonnel = useQuery(
        ["all personnel", currentPage, queryParams],
        async () => {
            const params = [];

            for (let key in queryParams) {
                if (queryParams[key].length === 0) {
                    continue;
                }

                params.push(`${key}=${queryParams[key]}`);
            }

            const urlParams = params.join("&");

            const { data } = await api.get<PersonnelResponseData>(
                `${apiEndpoints.personnel.getAll}?page=${currentPage}&per_page=${paginationSize}&${urlParams}`
            );
            return data;
        }
    );

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

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    /**
     * Handle onChange event fired when filtering by location or department
     * Populate queryParams with key=value pair
     * key is either "location" or "department" and value is an array of unique locations/departments
     *
     * @param name
     * @param value
     */
    const handleInputOnChange = (name: string, value: string): void => {
        setCurrentPage(1);

        setQueryParams((prev) => {
            let options = prev[name];

            if (Array.isArray(options)) {
                // remove value from array
                if (options.includes(value)) {
                    const filteredArray = options.filter((el) => el !== value);
                    return { ...prev, [name]: filteredArray };
                }

                // add value to array
                return { ...prev, [name]: [...options, value] };
            }

            // create new array with value
            return { ...prev, [name]: [value] };
        });
    };

    return {
        allPersonnel,
        goNextPage,
        goPreviousPage,
        toogleSidebar,
        locations,
        departments,
        isCollapsed,
        handleInputOnChange,
        goToPage,
        currentPage,
    };
};

export default useHomepage;
