import { useQuery, UseQueryOptions } from "react-query";

// Types
import {
    PersonnelDetailsDependencies,
    PersonnelDetailsResponseData,
} from "../../types/personnel.types";

// Misc
import { apiEndpoints } from "../../constants";
import { api } from "../../utils";
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

    const personnelDetails = useQuery(
        personnelKeyFactory.details(dependencies),
        async () => {
            if (typeof personnelID === "string") {
                const { data } = await api.get<PersonnelDetailsResponseData>(
                    apiEndpoints.personnel.getByID({ personnelID })
                );
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

    return {
        personnelDetails,
    };
};

export default usePersonnelDetailsQuery;
