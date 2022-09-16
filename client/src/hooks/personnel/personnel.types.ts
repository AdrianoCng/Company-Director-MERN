export interface Personnel {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    department_name: string;
    location_name: string;
    avatar_url: string;
    created_at: string;
    last_modified: string;
}

export interface PersonnelResponse {
    data: Personnel[];
    page: number;
    from: number;
    to: number;
    last_page: number;
    per_page: number;
    total: number;
}

export interface GetPersonnelParams {
    page?: number;
    per_page?: number;
    location?: string[];
    department?: string[];
}
