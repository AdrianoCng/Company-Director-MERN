export const baseURL = "http://localhost:5000";

export const apiEndpoints = {
    personnel: {
        getAll: "/api/personnel",
        add: "/api/personnel",
        getByID({ personnelID }: { personnelID: string }) {
            return `/api/personnel/${personnelID}`;
        },
        updateByID({ personnelID }: { personnelID: string }) {
            return `/api/personnel/${personnelID}`;
        },
    },
    location: {
        getAll: "/api/location",
    },
    department: {
        getAll: "/api/department",
    },
};

export const routes = {
    homepage: "/",
    addPersonnel: "/personnel",
    editPersonnel: "/personnel",
};

export const sidebarCollapsedWidth = "64px";
export const sidebarExpandedWidth = "290px";
export const sidebarTransition = (property: string) =>
    `${property} 350ms ease-in-out`;

export const iconStyles = {
    style: {
        // color: "var(--white)",
        // fontSize: "24px",
    },
};
