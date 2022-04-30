import { useQuery, UseQueryOptions } from "react-query";

// Types
import { AllPersonnelDependencies, PersonnelResponseData } from "../../types/personnel.types";

// Misc
import { paginationSize, apiEndpoints } from "../../constants";
import { request } from "../../utils";
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
            const params: { [key: string]: any } = {
                page: currentPage,
                per_page: paginationSize,
            };

            for (let key in queryParams) {
                if (queryParams[key].length < 1) continue;

                params[key] = queryParams[key].join();
            }

            const { data } = await request<PersonnelResponseData>({
                url: `${apiEndpoints.personnel.getAll}`,
                method: "GET",
                params,
            });

            return data;
        },
        {
            ...useQueryOptions,
        }
    );
};

export default useAllPersonnelQuery;
