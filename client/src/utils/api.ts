import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

const client = axios.create({
    // baseURL,
});

const request = <TResponseData = any>(options: AxiosRequestConfig): AxiosPromise<TResponseData> => {
    client.interceptors.response.use(
        (response) => response,
        (error) => {
            if (axios.isAxiosError(error)) {
                // Additional logic here
            }

            return Promise.reject(error);
        }
    );

    return client(options);
};

export default request;
