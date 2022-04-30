import { useQuery } from "react-query";

// Types
import { DepartmentsResponseObject } from "../../types/department.types";

// Misc
import { apiEndpoints } from "../../constants";
import departmentsKeyFactory from "../../queryKeys/departmentsKeyFactory";
import { request } from "../../utils";

const useDepartmentsQuery = () => {
    return useQuery(
        departmentsKeyFactory.baseKey,
        async () => {
            const { data } = await request<DepartmentsResponseObject[]>({
                url: apiEndpoints.department.getAll,
                method: "GET",
            });
            return data;
        },
        {
            staleTime: Infinity,
        }
    );
};

export default useDepartmentsQuery;
