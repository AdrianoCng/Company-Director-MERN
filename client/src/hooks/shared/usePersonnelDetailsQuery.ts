import { useQuery, UseQueryOptions } from "react-query";

// Types
import { PersonnelDetailsDependencies, PersonnelDetailsResponseData } from "../../types/personnel.types";

// Misc
import { apiEndpoints } from "../../constants";
import { request } from "../../utils";
import personnelKeyFactory from "./../../queryKeys/personnelKeyFactory";

interface Props {
    dependencies: PersonnelDetailsDependencies;
    useQueryOptions?: Omit<
        UseQueryOptions<
            PersonnelDetailsResponseData,
            unknown,
            PersonnelDetailsResponseData,
            ReturnType<typeof personnelKeyFactory.details>
        >,
        "queryKey" | "queryFn"
    >;
}
const usePersonnelDetailsQuery = ({ dependencies, useQueryOptions }: Props) => {
    const [personnelID] = dependencies;

    return useQuery(
        personnelKeyFactory.details(dependencies),
        async () => {
            if (typeof personnelID === "string") {
                const { data } = await request<PersonnelDetailsResponseData>({
                    url: apiEndpoints.personnel.getByID({ personnelID }),
                    method: "GET",
                });
                return data;
            }

            throw new Error("Error occured while fetching personnel details.");
        },
        {
            enabled: !!personnelID,
            refetchOnWindowFocus: false,
            ...useQueryOptions,
        }
    );
};

export default usePersonnelDetailsQuery;
