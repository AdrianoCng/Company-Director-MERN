import { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { OptionSelectField } from "../types/SelectField";
import { api } from "../utils";
import { apiEndpoints, routes } from "../utils/constants";
import useHomepage from "./useHomepage";
import { toast } from "react-toastify";
import { PersonnelDetailsResponseData } from "../types/Personnel";

const initialAddPersonnelForm: AddPersonnelForm = {
    first_name: "",
    last_name: "",
    email: "",
    department_name: "",
    location_name: "",
};

interface AddPersonnelForm {
    first_name: string;
    last_name: string;
    email: string;
    department_name: string;
    location_name: string;
}

interface Props {
    personnelID?: string;
}
const useAddPersonnel = ({ personnelID }: Props) => {
    const navigate = useNavigate();
    const { locations, departments } = useHomepage();

    const [form, setForm] = useState<AddPersonnelForm>(initialAddPersonnelForm);
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

    const { mutate: addPersonnel } = useMutation(
        (newPersonnel: AddPersonnelForm) => {
            return api.post(apiEndpoints.personnel.add, newPersonnel);
        },
        {
            onSuccess: (res) => {
                navigate(routes.homepage);
                toast("Record successfully added.");
            },
        }
    );

    const { mutate: editPersonnel } = useMutation(
        (updatedPersonnel: AddPersonnelForm) => {
            return api.put(
                apiEndpoints.personnel.updateByID({
                    personnelID: personnelID || "",
                }),
                updatedPersonnel
            );
        },
        {
            onSuccess: (res) => {
                navigate(routes.homepage);
                toast("Record successfully updated.");
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
        }
    );

    return {
        handleInputOnChange,
        form,
        handleFormOnSubmit,
        locationOptions,
        departmentOptions,
        PersonnelDetails,
    };
};

export default useAddPersonnel;
