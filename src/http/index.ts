import axiosRequest from 'axios';

export const axios = axiosRequest.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    'Content-Type': 'application/json',
  },
  
  timeout: 5000, 
});

axios.interceptors.request.use(
  (config) => {
    // Thêm token vào headers nếu có
    // const token = getToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Error response:', error);
    return Promise.reject(error);
  }
);

export const axiosInstance = axios;