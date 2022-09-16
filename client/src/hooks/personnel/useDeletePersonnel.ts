import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { apiEndpoints } from "./../../constants";
import { AxiosFormErrorResponse } from "./../../types/axios.types";
import { request } from "../../utils";
import personnelKeys from "./personnel.keys";

const useDeletePersonnel = () => {
    const queryClient = useQueryClient();
    const { mutate, ...mutation } = useMutation<
        AxiosResponse,
        AxiosError<AxiosFormErrorResponse>,
        string
    >(
        (personnelID) => {
            return request({
                url: apiEndpoints.personnel.deleteByID({ personnelID }),
                method: "DELETE",
            });
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(personnelKeys.baseKey);
                toast("Record successfully deleted.");
            },
        }
    );

    return [mutate, mutation];
};

export default useDeletePersonnel;
