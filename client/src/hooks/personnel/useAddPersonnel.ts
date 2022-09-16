import { useMutation, useQueryClient } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

import { apiEndpoints } from "./../../constants";
import { request } from "../../utils";
import { AxiosFormErrorResponse } from "../../types/axios.types";
import personnelKeys from "./personnel.keys";

const useAddPersonnel = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<AxiosResponse, AxiosError<AxiosFormErrorResponse>, FormData>(
        (formData) => {
            return request({ url: apiEndpoints.personnel.add, method: "POST", data: { formData } });
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(personnelKeys.baseKey);
                toast("Record successfully added.");
            },
        }
    );

    return [mutation.mutate, mutation] as const;
};

export default useAddPersonnel;
