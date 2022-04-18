import { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { OptionSelectField } from "../types/SelectField";
import { api } from "../utils";
import { apiEndpoints, routes } from "../utils/constants";
import useHomepage from "./useHomepage";
import { toast } from "react-toastify";
import { PersonnelDetailsResponseData } from "../types/Personnel";
import { AxiosError } from "axios";

export enum PersonnelDetails {
    FIRST_NAME = "first_name",
    LAST_NAME = "last_name",
    EMAIL = "email",
    LOCATION = "location_name",
    DEPARTMENT = "department_name",
}

type AddPersonnelForm = {
    [key in PersonnelDetails]: string;
};

export interface IFormErrors extends AddPersonnelForm {}

interface FormErrorResponseObject {
    value: string;
    msg: string;
    param: string;
    location: string;
}
interface AxiosFormErrorResponse {
    errors: FormErrorResponseObject[];
}

const initialAddPersonnelForm: AddPersonnelForm = {
    first_name: "",
    last_name: "",
    email: "",
    department_name: "",
    location_name: "",
};

interface Props {
    personnelID?: string;
}
const usePersonnel = ({ personnelID }: Props) => {
    const navigate = useNavigate();
    const { locations, departments } = useHomepage();

    const [form, setForm] = useState<AddPersonnelForm>(initialAddPersonnelForm);
    const [formErrors, setFormErrors] = useState<IFormErrors>(
        initialAddPersonnelForm
    );
    const [locationOptions, setLocationOptions] = useState<OptionSelectField[]>(
        []
    );
    const [departmentOptions, setDepartmentOptions] = useState<
        OptionSelectField[]
    >([]);

    useEffect(() => {
        populateLocationOptions();
    }, [locations.data]);

    useEffect(() => {
        populateDepartmentOptions();
    }, [departments.data]);

    const handleInputOnChange = (name: string, value: string) => {
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        !!personnelID ? editPersonnel(form) : addPersonnel(form);
    };

    const populateLocationOptions = () => {
        const locationsList = locations.data?.data.map(
            ({ name }): OptionSelectField => ({
                label: name,
                value: name,
            })
        );

        setLocationOptions(locationsList || []);
    };

    const populateDepartmentOptions = () => {
        const departmentsList = departments.data?.map(
            ({ name }): OptionSelectField => ({
                label: name,
                value: name,
            })
        );

        setDepartmentOptions(departmentsList || []);
    };

    // TODO: type Axios response
    // TODO: Client validation
    // TODO: Refactor onError to be reusabled
    const { mutate: addPersonnel } = useMutation(
        (newPersonnel: AddPersonnelForm) => {
            cleanFormErrors();

            return api.post(apiEndpoints.personnel.add, newPersonnel);
        },
        {
            onSuccess: () => {
                navigate(routes.homepage);
                toast("Record successfully added.");
            },
            onError: (err: AxiosError<AxiosFormErrorResponse>) => {
                const errors = err.response?.data.errors;

                errors?.forEach(({ param, msg }) => {
                    setFormErrors((prev) => ({ ...prev, [param]: msg }));
                });
            },
        }
    );

    // TODO: type Axios response
    // TODO: Client validation
    // TODO: Refactor onError to be reusabled
    const { mutate: editPersonnel } = useMutation(
        (updatedPersonnel: AddPersonnelForm) => {
            if (typeof personnelID === "string") {
                cleanFormErrors();

                return api.put(
                    apiEndpoints.personnel.updateByID({
                        personnelID: personnelID || "",
                    }),
                    updatedPersonnel
                );
            }

            throw new Error("Invalid ID.");
        },
        {
            onSuccess: () => {
                navigate(routes.homepage);
                toast("Record successfully updated.");
            },
            onError: (err: AxiosError<AxiosFormErrorResponse>) => {
                const errors = err.response?.data.errors;

                errors?.forEach(({ param, msg }) => {
                    setFormErrors((prev) => ({ ...prev, [param]: msg }));
                });
            },
        }
    );

    const PersonnelDetails = useQuery(
        ["personnel details", personnelID],
        async () => {
            if (typeof personnelID === "string") {
                const { data } = await api.get<PersonnelDetailsResponseData>(
                    apiEndpoints.personnel.getByID({ personnelID })
                );
                return data;
            }

            throw new Error("Error occured while fetching personnel details.");
        },
        {
            enabled: !!personnelID,
            onSuccess: ({ data }) => {
                const {
                    first_name,
                    last_name,
                    email,
                    department_name,
                    location_name,
                } = data;

                setForm({
                    first_name,
                    last_name,
                    email,
                    department_name,
                    location_name,
                });
            },
            refetchOnWindowFocus: false,
        }
    );

    const cleanFormErrors = () => {
        setFormErrors(initialAddPersonnelForm);
    };

    return {
        handleInputOnChange,
        form,
        handleFormOnSubmit,
        locationOptions,
        departmentOptions,
        PersonnelDetails,
        formErrors,
    };
};

export default usePersonnel;
