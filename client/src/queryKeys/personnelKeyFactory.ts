const personnelKeyFactory = {
    /** Base query key for personnel - Target all personnel queries */
    baseKey: ["personnel"] as const,
    /**
     *
     * @param dependencies Object of dependencies
     * @returns The query key for all personnel
     */
    all(dependencies: any[]) {
        return [...this.baseKey, "all", ...dependencies] as const;
    },
    /**
     *
     * @param dependencies Object of dependencies
     * @returns The query key for personnel details
     */
    details(dependencies: any[]) {
        return [...this.baseKey, "details", ...dependencies] as const;
    },
};

export default personnelKeyFactory;
