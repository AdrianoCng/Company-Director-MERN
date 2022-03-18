import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { OptionSelectField } from "../types/SelectField";
import { api } from "../utils";
import { apiEndpoints, routes } from "../utils/constants";
import useHomepage from "./useHomepage";
import { toast } from "react-toastify";

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

const useAddPersonnel = () => {
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

        addPersonnel.mutate(form);
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

    const addPersonnel = useMutation(
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

    return {
        handleInputOnChange,
        form,
        handleFormOnSubmit,
        locationOptions,
        departmentOptions,
    };
};

export default useAddPersonnel;
