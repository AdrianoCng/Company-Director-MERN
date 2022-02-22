import { ObjectId } from "mongodb";

export interface PersonnelObject {
    _id: ObjectId;
    first_name: string;
    last_name: string;
    email: string;
    department_id: string;
    location_id: string;
    created_at: string;
    last_modified: string;
}

export interface PersonnelResponseData {
    data: PersonnelObject[];
}
