import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

const client = axios.create({
    // baseURL,
});

const request = <TResponseData>(options: AxiosRequestConfig): AxiosPromise<TResponseData> => {
    client.interceptors.response.use(
        (response) => response,
        (error) => {
            if (axios.isAxiosError(error)) {
                // Additional logic here
                return error;
            }
        }
    );

    return client(options);
};

export default request;
