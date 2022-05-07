import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

const client = axios.create({
    // baseURL,
});

const request = <TResponseData = any>(options: AxiosRequestConfig): AxiosPromise<TResponseData> => {
    client.interceptors.response.use(
        (response) => response,
        (error) => {
            if (axios.isAxiosError(error) && error.response?.status === 500) {
                toast("An Error occured. Please try again later.", {
                    type: "error",
                    toastId: "status-code-500",
                });
            }

            return Promise.reject(error);
        }
    );

    return client(options);
};

export default request;
