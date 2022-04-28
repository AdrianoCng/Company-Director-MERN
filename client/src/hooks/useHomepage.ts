import { useState } from "react";

// Hooks
import useAllPersonnelQuery from "./shared/useAllPersonnelQuery";

interface QueryParamsState {
    [key: string]: string[];
}

const useHomepage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [queryParams, setQueryParams] = useState<QueryParamsState>({
        department: [],
        location: [],
    });

    const allPersonnel = useAllPersonnelQuery({
        dependencies: [currentPage, queryParams],
    });

    const toogleSidebar = () => {
        setIsCollapsed((prev) => !prev);
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
        toogleSidebar,
        isCollapsed,
        handleInputOnChange,
        currentPage,
        setCurrentPage,
    };
};

export default useHomepage;
