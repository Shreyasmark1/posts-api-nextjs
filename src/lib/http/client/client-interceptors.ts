import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { logOnDev } from "@/utils/logger/dev-logger"
import { CONTENT_TYPE_FORM, CONTENT_TYPE_JSON } from "@/utils/constants/app-constants"


const AUTH_URL: string[] = [
    '/verify'
]

const OPEN_URL_LIST: string[] = [
    '/login'
]

const MULTIPART_URL_LIST: string[] = [
    '/file-upload'
]

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {

    const token = ""; // get token from localstorage/session
    const { method, url, baseURL } = config;

    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${baseURL}${url} | Request`);

    if(!url){
        return config;
    }

    if(!OPEN_URL_LIST.includes(url) && token){
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    const contentType = MULTIPART_URL_LIST.includes(url) ? CONTENT_TYPE_FORM : CONTENT_TYPE_JSON;
    config.headers['Content-Type'] = contentType;
    return config;
}

const onResponse = (response: AxiosResponse): any => {

    const { method, url, baseURL } = response.config;
    const { status } = response;

    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${baseURL}${url} | Response ${status}`);

    const data = response.data; // object/data sent as response

    if (!url) {
        return Promise.resolve(data)
    }

    if (AUTH_URL.includes(url)) {
        // save tokens
        delete data.data.accessToken
        delete data.data.refreshToken
    }

    return Promise.resolve(data);
}

const onError = (error: AxiosError | Error): string => {
   
    if (axios.isAxiosError(error)) {
        const { message } = error;
        const { method, url, baseURL } = error.config as AxiosRequestConfig;
        const { statusText, status } = error.response as AxiosResponse ?? {};

        logOnDev(`🚨 [API] ${method?.toUpperCase()} ${baseURL}${url} | Error ${status} : ${statusText} '\n' ${message}`);

        switch (status) {
            case 401: {
                // "Login required"
                break;
            }
            case 403: {
                // "Permission denied"
                break;
            }
            case 404: {
                // "Invalid request"
                break;
            }
            case 500: {
                // "Server error"
                break;
            }
            default: {
                // "Unknown error occurred"
                break;
            }
        }

        if (status === 401) {
            // try auto login
            // Delete Token & Go To Login Page if you required.
            // sessionStorage.removeItem("token");
            // window.location = "/login";
        }

        if( error && error.response && error.response.data && error.response.data.description){
            return error.response.data.description
        }

        return message;
    }

    return error.message;
}

export const setupClientInterceptors = (instance: AxiosInstance): AxiosInstance => {
    instance.interceptors.request.use(onRequest, onError);
    instance.interceptors.response.use(onResponse, onError);
    return instance;
};

