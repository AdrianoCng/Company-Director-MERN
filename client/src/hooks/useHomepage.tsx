import { useState } from "react";
import { useQuery } from "react-query";
import { PersonnelResponseData } from "../types/Personnel";
import { api } from "../utils";
import { apiEndpoints } from "../utils/constants";

const useHomepage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const allPersonnel = useQuery(["all personnel", currentPage], async () => {
        const { data } = await api.get<PersonnelResponseData>(
            `${apiEndpoints.personnel.getAll}?page=${currentPage}`
        );
        return data;
    });

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
    };
};

export default useHomepage;
