import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

// Types
import { AxiosFormErrorResponse } from "../../types/axios.types";
import { AddPersonnelForm } from "./../../types/personnel.types";

// Misc
import { apiEndpoints, initialAddPersonnelForm, routes } from "../../constants";
import { request } from "../../utils";
import personnelKeyFactory from "../../queryKeys/personnelKeyFactory";

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
    const queryClient = useQueryClient();

    const {
        form,
        validateForm = () => true,
        resolveFormErrors = () => {},
        cleanFormErrors = () => {},
    } = data;

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
    });

    // TODO: type Axios response
    const { mutate: addPersonnel } = useMutation(
        async () => {
            cleanFormErrors();

            // if (!validateForm()) {
            //     throw new Error();
            // }

            return request({
                url: apiEndpoints.personnel.add,
                method: "POST",
                data: formData,
            });
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(personnelKeyFactory.baseKey);
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

                // if (!validateForm()) {
                //     throw new Error();
                // }

                return request({
                    url: apiEndpoints.personnel.updateByID({
                        personnelID: personnelID || "",
                    }),
                    method: "PUT",
                    data: formData,
                });
            }

            throw new Error("Invalid ID.");
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(personnelKeyFactory.baseKey);
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
                return request({
                    url: apiEndpoints.personnel.deleteByID({ personnelID }),
                    method: "DELETE",
                });
            }

            throw new Error("Invalid ID.");
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(personnelKeyFactory.baseKey);
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
