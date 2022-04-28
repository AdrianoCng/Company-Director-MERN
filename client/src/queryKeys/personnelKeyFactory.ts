// Types
import { AllPersonnelDependencies, PersonnelDetailsDependencies } from "../types/personnel.types";

const personnelKeyFactory = {
    /** Base query key for personnel - Target all personnel queries */
    baseKey: ["personnel"] as const,
    /**
     *
     * @param dependencies Object of dependencies
     * @returns The query key for all personnel
     */
    all(dependencies: AllPersonnelDependencies) {
        return [...this.baseKey, "all", ...dependencies] as const;
    },
    /**
     *
     * @param dependencies Object of dependencies
     * @returns The query key for personnel details
     */
    details(dependencies: PersonnelDetailsDependencies) {
        return [...this.baseKey, "details", ...dependencies] as const;
    },
};

export default personnelKeyFactory;
