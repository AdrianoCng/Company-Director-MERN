export const baseURL = "http://localhost:5000/api/";

export const apiEndpoints = {
    personnel: {
        getAll: "personnel",
    },
};

export const sidebarCollapsedWidth = "64px";
export const sidebarExpandedWidth = "290px";
export const sidebarTransition = (property: string) =>
    `${property} 350ms ease-in-out`;

export const iconStyles = {
    style: {
        color: "var(--white)",
        fontSize: "24px",
    },
};
