import { useQuery } from "react-query";

// Types
import { DepartmentsResponseObject } from "../../types/department.types";

// Misc
import { apiEndpoints } from "../../constants";
import departmentsKeyFactory from "../../queryKeys/departmentsKeyFactory";
import { api } from "../../utils";

const useDepartmentsQuery = () => {
    return useQuery(departmentsKeyFactory.baseKey, async () => {
        const { data } = await api.get<DepartmentsResponseObject[]>(apiEndpoints.department.getAll);
        return data;
    });
};

export default useDepartmentsQuery;
