import { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { OptionSelectField } from "../types/selectField.types";
import { api } from "../utils";
import { apiEndpoints, routes } from "../utils/constants";
import useHomepage from "./useHomepage";
import { toast } from "react-toastify";
import {
    AddPersonnelForm,
    IFormErrors,
    PersonnelDetailsResponseData,
} from "../types/personnel.types";
import { AxiosError } from "axios";
import {
    AxiosFormErrorResponse,
    FormErrorResponseObject,
} from "../types/axios.types";

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

    /** Populate location options */
    useEffect(() => {
        const locationsList = locations.data?.data.map(
            ({ name }): OptionSelectField => ({
                label: name,
                value: name,
            })
        );

        setLocationOptions(locationsList || []);
    }, [locations.data?.data]);

    /** Populate department options */
    useEffect(() => {
        const departmentsList = departments.data?.map(
            ({ name }): OptionSelectField => ({
                label: name,
                value: name,
            })
        );

        setDepartmentOptions(departmentsList || []);
    }, [departments.data]);

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

    // TODO: type Axios response
    // TODO: Client validation
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
                resolveFormErrors(err);
            },
        }
    );

    // TODO: type Axios response
    // TODO: Client validation
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
                resolveFormErrors(err);
            },
        }
    );

    const handleInputOnChange = (name: string, value: string) => {
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        !!personnelID ? editPersonnel(form) : addPersonnel(form);
    };

    const cleanFormErrors = () => {
        setFormErrors(initialAddPersonnelForm);
    };

    const resolveFormErrors = (err: AxiosError<AxiosFormErrorResponse>) => {
        const errors = err.response?.data.errors;

        errors?.forEach(({ param, msg }) => {
            setFormErrors((prev) => ({ ...prev, [param]: msg }));
        });
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
