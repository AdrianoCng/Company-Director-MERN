import { useMemo, useState } from "react";
import { AxiosError } from "axios";

// Types
import { AxiosFormErrorResponse } from "../../types/axios.types";

interface Props<TForm> {
    initialValues: TForm;
}
const useForm = <TForm extends { [key: string]: any }>({ initialValues }: Props<TForm>) => {
    const initialFormErrors = useMemo<TForm>(() => {
        return Object.keys(initialValues).reduce((obj: { [key: string]: any }, value) => {
            obj[value] = "";
            return obj;
        }, {}) as TForm;
    }, [initialValues]);

    const [form, setForm] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    /**
     * Resolve form errors
     * @param err Axios error
     */
    const resolveFormErrors = (err: AxiosError<AxiosFormErrorResponse>) => {
        const errors = err.response?.data.errors;

        errors?.forEach(({ param, msg }) => {
            setFormErrors((prev) => ({ ...prev, [param]: msg }));
        });
    };

    /** Clean form errors */
    const cleanFormErrors = () => {
        setFormErrors(initialFormErrors);
    };

    /**
     * Validate the personnel form before it is submitted.
     * @returns True if all the fields are set
     */
    const validateForm = (): boolean => {
        let tempErrors: { [key: string]: string } = {};

        for (const [key, value] of Object.entries(form)) {
            if (!value) {
                tempErrors[key] = value;

                setFormErrors((prev) => ({
                    ...prev,
                    [key]: "This field is required",
                }));
            }
        }

        return Object.keys(tempErrors).length === 0;
    };

    /**
     * Handle input onChange event
     * @param name input name attribute
     * @param value input value attribute
     */
    const handleInputOnChange = (name: string, value: any) => {
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setForm(initialValues);
    };

    return {
        form,
        setForm,
        formErrors,
        resolveFormErrors,
        cleanFormErrors,
        validateForm,
        handleInputOnChange,
        resetForm,
    };
};

export default useForm;
