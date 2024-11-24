import axiosRequest from 'axios';
import router from "@/router/router";

const axios = axiosRequest.create({
    baseURL: "http://localhost:8080/api/v1/",
    headers: {
        'Content-Type': 'application/json',
    },
    // timeout: 5000,
    withCredentials: true,
});

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.log("Redirecting to login due to 401...");
            router.push("/login").catch((err) => console.error("Router push error:", err));
        }
        return Promise.reject(error);
    }
);

export const axiosInstance = axios;