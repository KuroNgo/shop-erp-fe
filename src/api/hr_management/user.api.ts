import {axiosInstance} from "@/http/axios";

export interface User {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl: string;
    phone: string;
}

export interface InputChangePassword {
    password: string;
    passwordCompare: string;
}

export interface LoginUser {
    email: string;
    password: string;
}

// Định nghĩa hằng số cho các endpoint API
const API_ENDPOINTS = {
    GET_INFO: 'users/get/info',
    LOGIN: 'users/login',
    LOGIN_GOOGLE: 'auth/google/callback',
    REFRESH_TOKEN: 'users/get/refresh',
    DELETE_USER: 'users/delete',
    FORGET_PASSWORD: 'users/forget',
    VERIFY_PASSWORD: 'users/verify/password',
    CHANGE_PASSWORD: 'users/password/forget',
    LOGOUT: 'users/logout',
    SIGNUP: 'users/register',
    VERIFY: 'users/verify',
    UPDATE: 'users/update',
};

// Lấy thông tin người dùng
export const getInfo = async (): Promise<User | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_INFO);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

// Đăng nhập
export const login = async (loginData: LoginUser): Promise<User | null> => {
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, loginData);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

// Đăng nhập với Google
export const loginGoogle = async (): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.LOGIN_GOOGLE);
    } catch (error) {
        handleError(error);
    }
};

// Làm mới token
export const refreshToken = async (): Promise<void> => {
    try {
        await axiosInstance.get(API_ENDPOINTS.REFRESH_TOKEN);
    } catch (error) {
        handleError(error);
    }
};

// Xóa người dùng
export const deleteUser = async (): Promise<void> => {
    try {
        await axiosInstance.delete(API_ENDPOINTS.DELETE_USER);
    } catch (error) {
        handleError(error);
    }
};

// #region Quên mật khẩu
// Bước 1: Quên mật khẩu
export const forgetPassword = async (email: string): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.FORGET_PASSWORD, {email});
    } catch (error) {
        handleError(error);
    }
};

// Bước 2: Xác minh mã cho việc đổi mật khẩu
export const verificationCodeForChangePassword = async (verificationCode: string): Promise<void> => {
    try {
        await axiosInstance.patch(API_ENDPOINTS.VERIFY_PASSWORD, {verificationCode});
    } catch (error) {
        handleError(error);
    }
};

// Bước 3: Đổi mật khẩu
export const changePassword = async (changePassword: InputChangePassword): Promise<void> => {
    try {
        await axiosInstance.patch(API_ENDPOINTS.CHANGE_PASSWORD, changePassword);
    } catch (error) {
        handleError(error);
    }
};
// #endregion

// Đăng xuất
export const logout = async (): Promise<string | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.LOGOUT);
        return response.data.message;
    } catch (error) {
        handleError(error);
        return null;
    }
};

// #region Quy trình Đăng ký
// Bước 1: Đăng ký
export const signup = async (user: User): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.SIGNUP, user);
    } catch (error) {
        handleError(error);
    }
};

// Bước 2: Xác minh
export const verify = async (verificationCode: string): Promise<User | null> => {
    try {
        const response = await axiosInstance.patch(API_ENDPOINTS.VERIFY, {verificationCode});
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};
// #endregion

// Cập nhật thông tin người dùng
export const update = async (user: User): Promise<void> => {
    const formData = new FormData();
    formData.append('full_name', user.fullName);

    if (user.avatarUrl) {
        formData.append('profilePicture', user.avatarUrl);
    }

    try {
        const response = await axiosInstance.put(API_ENDPOINTS.UPDATE, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('User updated successfully:', response.data);
    } catch (error) {
        handleError(error);
    }
};
