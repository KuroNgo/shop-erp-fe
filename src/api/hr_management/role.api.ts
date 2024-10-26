import {axiosInstance} from "@/http/axios";

export interface Role {
    id?: string;
    title: string;
    description: string;
    numberOfPeople: number;
    createdAt: Date;
    updatedAt: Date;
}

type Input = Omit<Role, 'id' | 'numberOfPeople' | 'createdAt' | 'updatedAt'>;

// Hằng số cho endpoint API
const API_ENDPOINTS = {
    GET_ALL: 'roles/get/all',
    GET_BY_ID: 'roles/get/_id',
    GET_BY_TITLE: 'roles/get/name',
    UPDATE: 'roles/update',
    DELETE: 'roles/delete',
    CREATE: 'roles/create',
};

// Lấy tất cả các vai trò
export const getAll = async (): Promise<Role[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_ALL);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

// Lấy vai trò theo ID
export const getByID = async (id: string): Promise<Role | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_BY_ID, {params: {id}});
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

// Lấy vai trò theo tiêu đề
export const getByTitle = async (title: string): Promise<Role | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_BY_TITLE, {params: {title}});
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

// Cập nhật vai trò
export const updateRole = async (role: Role, id: string): Promise<void> => {
    try {
        await axiosInstance.put(API_ENDPOINTS.UPDATE, role, {params: {id}});
    } catch (error) {
        handleError(error);
    }
};

// Xóa vai trò
export const deleteRole = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete(API_ENDPOINTS.DELETE, {params: {id}});
    } catch (error) {
        handleError(error);
    }
};

// Tạo mới vai trò
export const createRole = async (role: Input): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.CREATE, role);
    } catch (error) {
        handleError(error);
    }
};
