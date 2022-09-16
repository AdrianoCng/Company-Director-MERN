import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import { apiEndpoints } from "./../../constants";
import { request } from "../../utils";
import { AxiosFormErrorResponse } from "../../types/axios.types";
import personnelKeys from "./personnel.keys";

interface Variables {
    personnelID: string;
    data: FormData;
}
const useEditPersonnel = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<AxiosResponse, AxiosError<AxiosFormErrorResponse>, Variables>(
        ({ personnelID, data }) => {
            return request({
                url: apiEndpoints.personnel.updateByID({ personnelID }),
                method: "PUT",
                data,
            });
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

export default useEditPersonnel;
