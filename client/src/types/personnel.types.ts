export interface PersonnelObject {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    department_name: string;
    location_name: string;
    profile_picture: string;
    created_at: string;
    last_modified: string;
}

export interface PersonnelResponseData {
    data: PersonnelObject[];
    page: number;
    from: number;
    to: number;
    last_page: number;
    per_page: number;
    total: number;
}

export interface PersonnelDetailsResponseData {
    data: PersonnelObject;
}

export enum PersonnelDetails {
    FIRST_NAME = "first_name",
    LAST_NAME = "last_name",
    EMAIL = "email",
    LOCATION = "location_name",
    DEPARTMENT = "department_name",
    PROFILE_PICTURE = "profile_picture",
}

export type AddPersonnelForm = {
    [key in PersonnelDetails]: string;
};

export type AllPersonnelDependencies = [
    currentPage: number,
    queryParams: {
        [key: string]: string[];
    }
];

export type PersonnelDetailsDependencies = [personnelID?: string];
