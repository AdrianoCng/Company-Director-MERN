interface IPersonnelKeyList {
    currentPage: number;
    queryParams: {
        [key: string]: string[];
    };
}

interface IPersonnelKeyDetails {
    personnelID?: string;
}

const personnelKeyFactory = {
    /** Base query key for personnel - Target all personnel queries */
    baseKey: ["personnel"] as const,
    /**
     *
     * @param dependencies Object of dependencies
     * @returns The query key for all personnel
     */
    list({ currentPage, queryParams }: IPersonnelKeyList) {
        return [...this.baseKey, "all", currentPage, queryParams] as const;
    },
    /**
     *
     * @param dependencies Object of dependencies
     * @returns The query key for personnel details
     */
    details({ personnelID }: IPersonnelKeyDetails) {
        return [...this.baseKey, "details", personnelID] as const;
    },
};

export default personnelKeyFactory;
