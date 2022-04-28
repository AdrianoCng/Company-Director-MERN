import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

// Types
import { AxiosFormErrorResponse } from "../../types/axios.types";
import { AddPersonnelForm } from "./../../types/personnel.types";

// Misc
import { apiEndpoints, initialAddPersonnelForm, routes } from "../../constants";
import { api } from "../../utils";

const defaultFormObject = {
    form: initialAddPersonnelForm,
    validateForm: () => true,
    resolveFormErrors: () => {},
    cleanFormErrors: () => {},
};

interface Props {
    personnelID?: string;
    data?: {
        form: AddPersonnelForm;
        validateForm?: () => Boolean;
        resolveFormErrors?: (err: AxiosError<AxiosFormErrorResponse>) => void;
        cleanFormErrors?: () => void;
    };
}
const usePersonnelMutations = ({ personnelID, data = defaultFormObject }: Props) => {
    const navigate = useNavigate();

    const {
        form,
        validateForm = () => true,
        resolveFormErrors = () => {},
        cleanFormErrors = () => {},
    } = data;

    // TODO: type Axios response
    const { mutate: addPersonnel } = useMutation(
        async () => {
            cleanFormErrors();

            if (!validateForm()) {
                throw new Error();
            }

            return api.post(apiEndpoints.personnel.add, form);
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
    const { mutate: editPersonnel } = useMutation(
        () => {
            if (typeof personnelID === "string") {
                cleanFormErrors();

                if (!validateForm()) {
                    throw new Error();
                }

                return api.put(
                    apiEndpoints.personnel.updateByID({
                        personnelID: personnelID || "",
                    }),
                    form
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

    // TODO: type Axios response
    const { mutate: deletePersonnelByID } = useMutation(
        () => {
            if (typeof personnelID === "string") {
                return api.delete(apiEndpoints.personnel.deleteByID({ personnelID }));
            }

            throw new Error("Invalid ID.");
        },
        {
            onSuccess: () => {
                navigate(routes.homepage);
                toast("Record successfully deleted.");
            },
            onError: (err: AxiosError<AxiosFormErrorResponse>) => {
                toast(err.message);
            },
        }
    );

    return {
        addPersonnel,
        editPersonnel,
        deletePersonnelByID,
    };
};

export default usePersonnelMutations;
