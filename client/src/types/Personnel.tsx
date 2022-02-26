export interface PersonnelObject {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    department_name: string;
    location_name: string;
    created_at: string;
    last_modified: string;
}

export interface PersonnelResponseData {
    data: PersonnelObject[];
}
