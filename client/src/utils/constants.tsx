export const baseURL = "http://localhost:5000";

export const apiEndpoints = {
    personnel: {
        getAll: "/api/personnel",
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
    addPersonnel: "/add-personnel",
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
