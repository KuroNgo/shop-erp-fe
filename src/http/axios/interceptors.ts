import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {AxiosError} from "axios";
import NProgress from "nprogress";
import {axios} from "@/http/axios/index";

const logOnDev = (message: string) => {
    console.log(message);
}


const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    NProgress.start();
    const {method, url} = config;

    logOnDev(`[API] ${method?.toUpperCase()} ${url} | Request`)

    if (method === "get") {
        config.timeout = 15000;
    }
    return config
}


const onResponse = (response: AxiosResponse): AxiosResponse => {
    NProgress.done();
    const {method, url} = response.config;
    const {status} = response;

    logOnDev(`[API] ${method?.toUpperCase()} ${url} | Response ${status}`)
    return response;
}

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
    if ((error as AxiosError).isAxiosError) {
        const {message} = error;
        const {method, url} = (error as AxiosError).config as AxiosRequestConfig;
        const {statusText, status} = (error as AxiosError).response as AxiosResponse ?? {};

        logOnDev(
            `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`
        );

        switch (status) {
            case 401: {
                window.location.href = '/login';
                break;
            }
            case 403: {
                // "Permission denied"
                break;
            }
            case 404: {
                // "Invalid request"
                window.location.href = '/not-found';
                break;
            }
            case 500: {
                // "Server error"
                window.location.href = '/internal-server-error';
                break;
            }
            default: {
                // "Unknown error occurred"
                break;
            }
        }

        if (status === 401) {
            sessionStorage.removeItem("token");
        }
    } else {
        logOnDev(`[API] | Error ${error.message}`);
    }

    return Promise.reject(error);
};

// Axios Interceptor: Giúp can thiệp vào luồng xử lý để thực hiện các tác vụ trước khi gửi và sau khi nhận yêu cầu
const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
    // Request intercepter: Chặn và xử lý các yêu cầu trước khi chúng được gửi tới server
    instance.interceptors.request.use(onRequest, onErrorResponse)

    // Chặn và xử lý phản hồi từ server trước khi dữ liệu được trả về. Một số trường hợp sử dụng phổ biến
    // Xử lý lỗi toàn cục: như 401 Unauthorized hoặc 500 Internal Server Error
    // Tự động Refresh Token: nếu token hết hạn và retry lại request
    // Chuyển đổi hoặc định dạng dữ liệu trả về cho phù hợp với ứng dụng
    instance.interceptors.response.use(onResponse, onErrorResponse)

    return instance
}

setupInterceptors(axios)