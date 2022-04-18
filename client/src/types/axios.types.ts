export interface FormErrorResponseObject {
    value: string;
    msg: string;
    param: string;
    location: string;
}

export interface AxiosFormErrorResponse {
    errors: FormErrorResponseObject[];
}
