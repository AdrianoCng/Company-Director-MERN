import { useQuery, UseQueryOptions } from "react-query";

// Types
import { AllPersonnelDependencies, PersonnelResponseData } from "../../types/personnel.types";

// Misc
import { paginationSize, apiEndpoints } from "../../constants";
import { api } from "../../utils";
import personnelKeyFactory from "../../queryKeys/personnelKeyFactory";

interface Props {
    dependencies: AllPersonnelDependencies;
    useQueryOptions?: Omit<
        UseQueryOptions<
            PersonnelResponseData,
            Error,
            PersonnelResponseData,
            ReturnType<typeof personnelKeyFactory.all>
        >,
        "queryKey" | "queryFn"
    >;
}
const useAllPersonnelQuery = ({ dependencies, useQueryOptions = {} }: Props) => {
    const [currentPage, queryParams] = dependencies;

    return useQuery(
        personnelKeyFactory.all(dependencies),
        async () => {
            const baseQueryParams: { [key: string]: any } = {
                page: currentPage,
                per_page: paginationSize,
                ...queryParams,
            };

            const params = [];

            for (let key in baseQueryParams) {
                params.push(`${key}=${baseQueryParams[key]}`);
            }

            const urlParams = params.join("&");

            const { data } = await api.get<PersonnelResponseData>(
                `${apiEndpoints.personnel.getAll}?${urlParams}`
            );
            return data;
        },
        {
            ...useQueryOptions,
        }
    );
};

export default useAllPersonnelQuery;
