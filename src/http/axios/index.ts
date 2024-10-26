import axiosRequest from 'axios';

export const axios = axiosRequest.create({
    baseURL: "http://localhost:8080/api/v1/",
    headers: {
        'Content-Type': 'application/json',
    },

    timeout: 5000,
});

export const axiosInstance = axios;