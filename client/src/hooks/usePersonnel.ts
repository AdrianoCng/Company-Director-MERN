import { useState, useEffect } from "react";

// Hooks
import useHomepage from "./useHomepage";
import usePersonnelDetailsQuery from "./shared/usePersonnelDetailsQuery";
import useForm from "./shared/useForm";
import usePersonnelMutations from "./shared/usePersonnelMutations";

// Types
import { OptionSelectField } from "../types/selectField.types";

// Misc
import { initialAddPersonnelForm } from "../constants";

interface Props {
    personnelID?: string;
}
const usePersonnel = ({ personnelID }: Props) => {
    const [locationOptions, setLocationOptions] = useState<OptionSelectField[]>([]);
    const [departmentOptions, setDepartmentOptions] = useState<OptionSelectField[]>([]);
    const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);
    const { locations, departments } = useHomepage();
    const {
        form,
        formErrors,
        handleInputOnChange,
        setForm,
        validateForm,
        resolveFormErrors,
        cleanFormErrors,
    } = useForm({
        initialValues: initialAddPersonnelForm,
    });

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

    usePersonnelDetailsQuery({
        dependencies: [personnelID],
        useQueryOptions: {
            onSuccess: ({ data }) => {
                const { first_name, last_name, email, department_name, location_name } = data;

                setForm({
                    first_name,
                    last_name,
                    email,
                    department_name,
                    location_name,
                });
            },
        },
    });

    const { addPersonnel, editPersonnel, deletePersonnelByID } = usePersonnelMutations({
        personnelID,
        data: { form, validateForm, resolveFormErrors, cleanFormErrors },
    });

    /** Handle Personnel form submit event */
    const handleFormOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        !!personnelID ? editPersonnel() : addPersonnel();
    };

    /** Delete personnel record from database */
    const handleDeletePersonnel: React.MouseEventHandler<HTMLButtonElement> = () => {
        deletePersonnelByID();
    };

    return {
        handleInputOnChange,
        form,
        handleFormOnSubmit,
        locationOptions,
        departmentOptions,
        formErrors,
        handleDeletePersonnel,
        setIsDeleteConfirmationModalOpen,
        isDeleteConfirmationModalOpen,
    };
};

export default usePersonnel;
