import { AddPersonnelForm } from "./types/personnel.types";

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
        deleteByID({ personnelID }: { personnelID: string }) {
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
export const sidebarTransition = (property: string) => `${property} 350ms ease-in-out`;

export const iconStyles = {
    style: {
        // color: "var(--white)",
        // fontSize: "24px",
    },
};

export const paginationSize = 15;

export const initialAddPersonnelForm: AddPersonnelForm = {
    first_name: "",
    last_name: "",
    email: "",
    department_name: "",
    location_name: "",
    profile_picture: "",
};
